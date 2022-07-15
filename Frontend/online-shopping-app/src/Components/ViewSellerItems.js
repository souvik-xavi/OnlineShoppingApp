import React from 'react';

function Cart(props) {
    return (
        <div className="">
  <div className="item">
    <div className="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img className='img-cart' src={props.url} alt="" />
    </div>
 
    <div className="description">
      {props.name}
    </div>
    <div className="description">
      {props.catagory}
    </div>
    <div className="description">Rs. {props.price}</div>
    <div className="description" style={{marginLeft:'30px'}}>
    <button class="minus-btn" type="button" name="button" onClick={() => props.handleDelete(props.id)}>
          X
      </button>
    </div>

 
    
    </div></div>
    );
}

export default Cart;