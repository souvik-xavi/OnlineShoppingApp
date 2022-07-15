const prisma = require('../Db/index')
exports.addOrder = async (req, res, next) => {
    var id = parseInt(req.params.id);
    var userId = parseInt(req.user.id);
    
    let totalAmount=0;
    
    try {
        const cartitems =await prisma.cartitem.findMany({
            where: {
                cartId:id
            },   
        })
        
        
        if(cartitems.length==0){
            return res.send("Cart is Empty");
        }
        const order = await prisma.order.create({
            data:{userId}
        })
        
        for(let i=0;i<cartitems.length;i++){
            const orderItems = await prisma.orderitem.create({
                data:{productId:cartitems[i].productId,
                    item:cartitems[i].item,
                    price:cartitems[i].price,
                    url:cartitems[i].url ,
                    orderId:order.id}
            })
            console.log(orderItems);
            totalAmount = totalAmount + cartitems[i].price
        }
        
        const updateOrder = await prisma.order.update({
            where: {
                id:order.id,
              },
              data: {
                totalAmount
              },
        })
        const deleteCart = await prisma.cartitem.deleteMany({
            where: {
                cartId:id
            },
          })
        res.send(updateOrder);
        

    } catch (error) {
        return res.send(error)
        
    }

}
exports.viewOrder=async(req,res,next)=>{
    var userId=parseInt(req.user.id);
    try{
        const Order = await prisma.order.findMany({
            where: {
                userId:userId
            },
        });
        if(Order.length==0){
            return res.send({
                'orderPresent':false,
                "Status":"No Order found"
            })
        }
        res.send({
            'orderPresent':true,
            "userid":userId,
            "Order":Order
        })
  
    }catch(err){
        console.log(err)
    }
    
}

exports.viewOrderDetails = async(req,res,next)=>{
    var id = parseInt(req.params.id);
    try {
        const orderItems =await prisma.orderitem.findMany({
            where: {
                orderId:id
            },  
            include:{
                product:1
            } 
        })
        console.log(id);
        if(orderItems.length==0){
            return res.send("Nothing Ordered");
        }
        return res.send({"orderItem":orderItems});
        
    } catch (error) {
        
    }

}




