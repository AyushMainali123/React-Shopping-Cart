import React, { useContext, useState } from "react";
import { cartContext } from "../context/CartContext";

const Product = ({ data }) => {
  const [disabled, setDisabled] = useState(false)
  const cart = useContext(cartContext);
  const handleClick = (e) => {
    setDisabled(true)
    cart.dispatch({
      type: "ADD_ITEM",
      payload: {
        newItem: {...data, quantity: 1},
      },
    });
  };

  const checkItemInCart = (id) => {
    return cart.cart.itemsInCart.some(item => item.id === id)
  }
  return (
    <div className="Product">
      <img src={data.imageUrl} alt={data.imageTitle} />
      <div>{data.title}</div>
      <div>${data.price}</div>

      <button onClick={handleClick} disabled={checkItemInCart(data.id)}>
        {checkItemInCart(data.id) ? 'Item In Cart' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default Product;
