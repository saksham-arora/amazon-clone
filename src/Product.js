import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue(); //Firstly, get the basket and the dispatch function associated with it
  console.log(basket);
  const addToBasket = () => {
    //dispatch the item in data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <div className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product_img" src={image} alt="product-img"></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
