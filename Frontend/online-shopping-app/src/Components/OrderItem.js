import React from "react";

function OrderItem(props) {
  return (
    <div style={{margin:"2%"}}>
      <div className="item">
        
        <div class="image">
          <img  style={{margin:"2%"}} className="img-cart" src={props.url} alt="" />
        </div>

        <div className="description">{props.name}</div>

        <div className="description">
         
          {props.item}
         
        </div>
        <div className="description">Rs. {props.price}</div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default OrderItem;
