import React from 'react';

function CartProduct(props) {
    return (
        <div className="itemCard border popupOption">
            <svg onClick={() => props.handleRemove(props.product)} className="cross" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="13.3245" x2="12.3245" y2="3" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                <line x1="12.3245" y1="13.1529" x2="2.00001" y2="2.82843" stroke="black" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <div className="item">
                {props.product.svg}
            </div>
            <div className="plusminus">
                <svg onClick={() => props.handleChange(props.product, -1)} width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="2" x2="14" y2="2" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <p className="border price">x {props.product.amount}</p>
                <svg onClick={() => props.handleChange(props.product, 1)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="8" x2="14" y2="8" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                <line x1="8" y1="14" x2="8" y2="2" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </div>   
        </div>
  )
}

export default CartProduct;