import React from "react";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"
import { useState } from "./StateProvider";

function Checkout() {
    const [{ basket }, dispatch] = useState()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://dms.pnshk.aswatson.net/images/PARKnSHOP.com/2023/Xmas/APP12_E.png" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            img = {item.img}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ) )}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal /> 
            </div> 
        </div>
    )
}

export default Checkout