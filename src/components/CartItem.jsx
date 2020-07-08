import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const shoppingCart = useContext(cartContext);

  const handleRemove = (id) => {
    shoppingCart.dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id,
      },
    });
    };
    
    const handleAddQuantity = (id) => {
        shoppingCart.dispatch({
          type: "ADD_QUANTITY",
          payload: {
            id,
          },
        });
    }
    const handleReduceQuantity = (id) => {
        if (item.quantity > 1) {
            shoppingCart.dispatch({
              type: "REDUCE_QUANTITY",
              payload: {
                id,
              },
            });
        }
        else handleRemove(id)
      
    };
  return (
    <div className="CartItem">
      <div>
        <div className="imgContainer">
          <img src={item.imageUrl} alt={item.imageTitle}/>
        </div>
        <div>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div className="remove" onClick={() => handleRemove(item.id)}>
            {" "}
            Remove
          </div>
        </div>
      </div>

      <div>
        <i className="fas fa-sort-up" onClick = {()=>handleAddQuantity(item.id)}></i>
        <div>{item.quantity}</div>
        <i className="fas fa-sort-down" onClick = {()=>handleReduceQuantity(item.id)}></i>
      </div>
    </div>
  );
};

export default CartItem;
