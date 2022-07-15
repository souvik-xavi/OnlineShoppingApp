import React, { useEffect,useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function ViewOrderItem(props) {
  const temp = useSelector((state) => state);
  let id = temp.orderid;
  const [orderItem, setOrderItem] = useState([]);

  const fatchOrder = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:8083/vieworderDetails/${id}`,
        {
          headers: {
            Authorization: temp.token,
          },
        }
      );
      setOrderItem(response.data.orderItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchOrder();
  }, []);


  return (
    <div className="order-cart">
      <div class="title">Ordered Items</div>
      {orderItem.map((order) =>
                <OrderItem key={order.id} 
                url={order.url}
                name={order.product.name}
                item={order.item}
                price={order.price}
                    />

                
            )
            
            }
            <h5 style={{textAlign:"center"}}>All your items in this Order</h5>
    </div>
  );
}

export default ViewOrderItem;
