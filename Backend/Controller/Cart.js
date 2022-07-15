const prisma = require('../Db/index')
exports.addCart=async(req,res,next)=>{
    var id= parseInt(req.params.id);
    var userId=parseInt(req.user.id);
    try{
        //fetching data
        const product = await prisma.product.findUnique({
			where: {
				id:id
			},
		});
        //fetching cart
        const existingCart = await prisma.cart.findUnique({
			where: {
				userId:userId
			},
		});

    //inserting to non-existing cart
    if(!existingCart){
        const cart = await prisma.cart.create({
                data:{userId}
            })

        const cartItem = await prisma.cartitem.create({
            data:{productId:id,cartId:cart.id,item:1,price:product.price,url:product.url,productName:product.name}
    
        })
        console.log(cartItem);
        return res.send({'cartItem': cartItem, isAdded: true});

        
    };
    
   //fetchingCartItems
    const existingCartItem = await prisma.cartitem.findFirst({
        where: {
            productId:id,cartId:existingCart.id
        },
    })

    if(!existingCartItem){

        const cartItem = await prisma.cartitem.create({
            data:{productId:id,cartId:existingCart.id,item:1,price:product.price,url:product.url,productName:product.name}
    
        })

        console.log(cartItem);
        return res.send({'cartItem': cartItem, isAdded: true});

    }

    let price = existingCartItem.price + product.price;
    let item = existingCartItem.item + 1;
    const cartItem = await prisma.cartitem.update({
        where: {
            id:existingCartItem.id,
          },
          data: {
            price,item
          },
    })
    return res.send({'cartItem': cartItem, isAdded: true});

    }catch(err){
        console.log(err);
    }

    

}

exports.viewCart=async(req,res,next)=>{
    var userId=parseInt(req.user.id);
    let totalprice=0;
    try{
        const existingCart = await prisma.cart.findUnique({
			where: {
				userId:userId
			},
		});

        if(!existingCart){
            return res.send({
                "Status":"No Cart found"
            })
        }

        const existingCartItem = await prisma.cartitem.findMany({
            where: {
                cartId:existingCart.id
            },
        })

        
        for(var i=0;i<existingCartItem.length;i++){
                totalprice+=existingCartItem[i].price
        }
        console.log(totalprice)
        res.send({
            "cart":existingCart,
            "totalPrice":totalprice,
            "cartItem":existingCartItem
        })
  
    }catch(err){
        console.log(err)
    }
    
}
exports.deleteCart=async(req,res,next)=>{
    var userId=parseInt(req.user.id);

    try{

        const existingCart = await prisma.cart.findUnique({
			where: {
				userId:userId
			},
		});

        const deleteCart = await prisma.cartitem.deleteMany({
            where: {
                cartId:existingCart.id
            },
          })
        res.send(deleteCart);
    }
    catch(err){
      console.log(err)
    }
}

exports.deleteItem=async(req,res,next)=>{

    var cartItemId= parseInt(req.params.id);
    console.log(cartItemId);
    try {

        const deleteCart = await prisma.cartitem.delete({
            where: {
                id:cartItemId
            },
          })
        
          return res.send(deleteCart)

    } catch (error) {

        console.log(error)
        
    }

}

exports.decrement=async(req,res,next)=>{
    var cartItemId= parseInt(req.params.id);
    try {

        const existingCartItem = await prisma.cartitem.findFirst({
            where: {
                id:cartItemId
            },
        })

        if(!existingCartItem){
            return res.send({"Satus":"no such item found"})
        }

        let productId=existingCartItem.productId;

        const product = await prisma.product.findUnique({
			where: {
				id:productId
			},
		});
        
        console.log(existingCartItem)

        if(existingCartItem.item>1){
            console.log("Hello")
            var item = existingCartItem.item-1;
            var price = existingCartItem.price - product.price;
            console.log(item,price)

            const cartItem = await prisma.cartitem.update({
                where: {
                    id:cartItemId,
                  },
                  data: {
                    price,item
                  },
            })
            console.log(cartItem);

            return res.send(cartItem)

        }

        const deleteCart = await prisma.cartitem.delete({
            where: {
                id:cartItemId
            },
          })
        
          return res.send(deleteCart)


        

    } catch (error) {
        console.log(error)
    }

}