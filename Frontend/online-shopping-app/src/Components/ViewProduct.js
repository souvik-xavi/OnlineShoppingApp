import React from 'react';
import "./Form.css";
import { useSelector } from "react-redux";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function ViewProduct(props) {
    const navigate = useNavigate();
    const temp = useSelector((state) => state);
    const obj = {};
    const handleSubmit = async (id) => {
        if(!temp.auth){
            toast.success('Please Login in Order to add items',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                navigate("/login")

        }else{
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
    }
    return (

        <div className="card">
            <img src={props.url} className="card__img"></img>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">Catagory: {props.description}</p>
            <h3 className="card__price">Price: ₹{props.price}</h3>
            <button className="card__btn" onClick={() => handleSubmit(props.id)}>Add to Cart</button>
        </div>

    );
}

export default ViewProduct;