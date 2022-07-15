import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import Order from './Order';
import ViewSellerItems from './ViewSellerItems';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function ViewSellerProducts(props) {
    const temp = useSelector((state) => state);
    const [sellerprods, setSellerProds] = useState([]);
    const fetchProducts = async (e) => {
        try {
            const response = await axios.get("http://localhost:8083/viewProductList", {
                headers: {
                    Authorization: temp.token,
                },
            });
            const orderItems=response.data.allProducts;
            setSellerProds(orderItems);

        }
        catch(error){

        }

    }
    useEffect(() => {
        fetchProducts();
    }, [])
    const handleDelete = async (id) => {
        console.log(id);
        const headers = {
            "Content-Type": "application/json",
            Authorization: temp.token,
        }
        try {
            const response = await axios.delete(
                `http://localhost:8083/delete-product/${id}`,
                {
                    headers: headers,
                }
            );
                    toast.success('Item Deleted from Store',{
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                      fetchProducts();
                    

        } catch (error) {

        }
}
    return (
        <div>
            <div className='shopping-cart'>
            <div class="title">
    My Products
  </div>
 
            {sellerprods.map((order) =>
                <ViewSellerItems key={order.id} 
                    name={order.name}
                    price={order.price}
                    catagory={order.catagory}
                    url={order.url}
                    id ={order.id}
                    handleDelete={handleDelete}
                    />
            )}
            </div></div>
    );
}

export default ViewSellerProducts;