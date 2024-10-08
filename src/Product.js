import React from "react";
import "./Product.css"
import { useState } from "./StateProvider";

function Product({id, title, img, price, rating}) {

    const [state, dispatch] = useState([]);

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                img: img,
                price: price,
                rating: rating
            }
        });
    };

    return (
        
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src= {img} />

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    
    )
}

export default Product