import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import Cart from './Cart';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
function ViewCart(props) {
    const temp = useSelector((state) => state);
    const [cartitem, setCartItem] = useState([]);
    const [totalprice, setTotalPrice] = useState(0.0);
    const [slNo,setSlNo]=useState('#');
    const obj = {};
    const navigate = useNavigate();
    const fatchProduct = async (e) => {

        try {
            const response = await axios.get("http://localhost:8083/viewcart", {
                headers: {
                    Authorization: temp.token,
                },
            });
            const cartItems=response.data.cartItem;
            cartItems.sort(function(a, b){return a.id-b.id});
            setCartItem(cartItems);
            setTotalPrice(response.data.totalPrice);
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fatchProduct();
    }, [])


    const handleSubmit = async (id,item) => {
        
        const headers = {
            "Content-Type": "application/json",
            Authorization: temp.token,
        }
        try {
            const response = await axios.post(
                `http://localhost:8083/addtocart/${id}`,
                { ...obj },
                {
                    headers: headers,
                }
            );
                const {isAdded} = response.data;
                if(isAdded){
                    toast.success('Product added to Cart',{
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      });
                      fatchProduct();
                    }else{
                        toast.error('Could not add Product! Try again later',{
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          });
                      }

        } catch (error) {

        }
    }
    const handleMinus = async (id) => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: temp.token,
        }
        try {
            const response = await axios.delete(
                `http://localhost:8083/deleteitembyone/${id}`,
                {
                    headers: headers,
                }
            );
                const {isAdded} = response.data;
                    toast.success('Product removed from Cart',{
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                      fatchProduct();
                    

        } catch (error) {

        }}
        const handleDelete = async (id) => {
            const headers = {
                "Content-Type": "application/json",
                Authorization: temp.token,
            }
            try {
                const response = await axios.delete(
                    `http://localhost:8083/deleteitem/${id}`,
                    {
                        headers: headers,
                    }
                );
                        toast.success('Item Deleted from Cart',{
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        })
                          fatchProduct();
                        
    
            } catch (error) {
    
            }
    }
    const handleOrder = async (id) => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: temp.token,
        }
        try {
            const response = await axios.post(
                `http://localhost:8083/addorder/${id}`,
                { ...obj },
                {
                    headers: headers,
                }
            );
            toast.success('Order placed Successfully',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            navigate('/vieworder');

        } catch (error) {

        }
    }
    return (
        <div>
            <div className='shopping-cart'>
            <div class="title">
    Shopping Bag
  </div>
 
            {cartitem.map((cart) =>
                <Cart key={cart.id} 
                description={cart.productName}
                    totalprice={cart.price} 
                    item = {cart.item}
                    productId = {cart.productId}
                    id={cart.id}
                    url={cart.url}
                    cartid={cart.cartId}
                    handleSubmit={handleSubmit}
                    handleMinus={handleMinus}
                    handleDelete={handleDelete}
                    sl={slNo}
                    />

                
            )
            
            }
            <div style={{textAlign:'center'}}>Cart Total: {totalprice}</div><br/>
            <div style={{textAlign:'center'}}>
            <button class="order-btn" type="button" name="button" onClick={() => handleOrder(cartitem[0].cartId)}>PLACE ORDER</button>
            </div>
            </div>
                </div>
    )
}

export default ViewCart;