import React from "react";
import { setOrderId } from "../Actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Order(props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const temp = useSelector((state) => state);
  const handleChange = (id) => {
    dispatch(setOrderId(id));
    navigate("/vieworderitem");
  };
  return (
    <div
      >
          <div style={{ margin: "2%", border: "2px solid rgba(165, 204, 224, 0.5)" }}>
               <div className="item"> 
               <div className="description">ORDER ID:{props.id}</div> 
               <div className="description">Rs. {props.total}</div> 
               <div className="description"> 
               <button onClick={() => { handleChange(props.id); }} > 
               View Details </button> 
               </div> 
               </div>
    {/* // <h3 style={{textAlign:"center"}}>Your_Order_Details</h3>
    //   <div className="item">
    //     <div className="order">
    //       <div className="">
    //         <p style={{ textAlign: "center" }}>Order Id : {props.id}</p>{" "}
    //       </div>
    //     </div>

    //     <div className="order">
    //       <div className="">
    //         <p tyle={{ textAlign: "center" }}>Rs. {props.total}</p>
    //       </div>
    //     </div>
    //   </div> */}</div>
    </div>
  );
}

export default Order;
