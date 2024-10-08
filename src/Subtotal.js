import React from "react";
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useState } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {

    const [{basket}, dispatch] = useState();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>

                        <button>Proceed to pay</button>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
            />
        </div>
    )
}

export default Subtotal