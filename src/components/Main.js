import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Popup from "./Popup";

export default function Main(props) {

    const { products } = props;

    // Set state for popup product
    const [popupProduct, setPopupProduct] = useState(props.products[0]);
    const [price, setPrice] = useState(popupProduct.price);
    const [count, setCount] = useState(1);

    // Add to previous count and set price
    function handleAdd(added) {
        if (count >= 1) {
            setCount(count + added);
            setPrice(price + popupProduct.price);
        }  
    }

    // Subtract from previous count and set price
    function handleSubtract(subtracted) {
        if (count >= 2) {
        setCount(count - subtracted);
        setPrice(price - popupProduct.price);
        }
    }

    // Change popup to new product and reset price and count
    function handlePopup(product) {
        document.querySelector(".popup").classList.remove("popupGone");
        setPopupProduct(product);
        setPrice(product.price);
        setCount(1);
    }

    return (
        <main >
            <div className="main">
                {products.map((product) => 
                    <ItemCard 
                        key={product.id} 
                        product={product} 
                        handlePopup={handlePopup}
                    />
                )}
            </div>
            
            <Popup 
                popupProduct={popupProduct} 
                handleAdd={handleAdd} 
                handleSubtract={handleSubtract} 
                price={price}
                count={count}
            />
        </main>
    )
}