import React, { useState } from "react";

function Cart(props) {
  return (
    <div className="">
      <div className="item">
        <div class="image">
          <img className="img-cart" src={props.url} alt="" />
        </div>

        <div className="description">{props.description}</div>

        <div className="quantity">
          <button
            class="minus-btn"
            type="button"
            name="button"
            onClick={() => props.handleMinus(props.id)}
          >
            -
          </button>
          <input type="text" name="name" value={props.item} />
          <button
            class="plus-btn"
            type="button"
            name="button"
            onClick={() => props.handleSubmit(props.productId, props.id)}
          >
            +
          </button>
        </div>
        <div className="total-price">Rs. {props.totalprice}</div>
        <div className="quantity" style={{ marginLeft: "30px" }}>
          <button
            class="minus-btn"
            type="button"
            name="button"
            onClick={() => props.handleDelete(props.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
