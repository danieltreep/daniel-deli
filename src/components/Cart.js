import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";

export default function Cart(props) {
    useEffect(() => {
        props.handlePrice();
    })

    return (
        <>
            <header>
                <h1>CART</h1>
                <div className="cart">
                    <button className="border backwardButton input">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292847 8.70711C-0.0976772 8.31658 -0.0976772 7.68342 0.292847 7.29289L6.65681 0.928932C7.04733 0.538408 7.6805 0.538408 8.07102 0.928932C8.46155 1.31946 8.46155 1.95262 8.07102 2.34315L2.41417 8L8.07102 13.6569C8.46155 14.0474 8.46155 14.6805 8.07102 15.0711C7.6805 15.4616 7.04733 15.4616 6.65681 15.0711L0.292847 8.70711ZM17.1904 9H0.999954V7H17.1904V9Z" fill="black"/>
                        </svg>
                        <Link to='/'>Back to Shop</Link>
                    </button>
                    <button className="border grid input addCartButton" onClick={props.emptyCart}>Empty Cart</button>
                </div>
            </header>
            <main>
                <CartProducts cart={props.cart} handleRemove={props.handleRemove} handleChange={props.handleChange}/>
                <div className="cart">
                    <div className="border input priceButton">
                        <p>Total: $ {Number.parseFloat(props.price).toFixed(2)}</p>
                    </div>
                    <div className='border popupOption forwardButton'>
                        <button className='popupButton'>
                            <Link to='/checkout'>Checkout</Link>
                            <svg className="arrow" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2308 8.2885C17.6214 7.89797 17.6214 7.26481 17.2308 6.87428L10.8669 0.510323C10.4763 0.119798 9.84318 0.119798 9.45266 0.510323C9.06214 0.900847 9.06214 1.53401 9.45266 1.92454L15.1095 7.58139L9.45266 13.2382C9.06214 13.6288 9.06214 14.2619 9.45266 14.6525C9.84318 15.043 10.4763 15.043 10.8669 14.6525L17.2308 8.2885ZM0.333252 8.58139H16.5237V6.58139H0.333252V8.58139Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}