import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";

export default function ProductPage(props) {

    const { products } = props;

    function handleSearch(searchTerm) {
    
        const itemCards = document.querySelectorAll('.itemCard');

        for (let i = 0; i < products.length; i++) {
            itemCards[i].classList.add("hide");

            if (products[i].name.toUpperCase().includes(searchTerm.toUpperCase()) || 
                products[i].keywords.includes(searchTerm)) {
                itemCards[i].classList.remove("hide");
            } 
        }
    }
    
    // Set state for popup product
    const [popupProduct, setPopupProduct] = useState(products[0]);

    // Change popup to new product and reset price and count
    function handlePopup(product) {
        document.querySelector(".popup").classList.remove("popupGone");
        setPopupProduct(product);
    }

    function closePopup() {
        const popup = document.querySelector(".popup");
        popup.classList.add("popupGone");
    }

    return (
        <>
            <Header 
                search={handleSearch}
                count={props.count}
            />
            <Main 
                products={products} 
                handlePopup={handlePopup}
            />
            <Popup 
                popupProduct={popupProduct} 
                closePopup={closePopup}
                handleCart={props.handleCart}
                cart={props.cart}
            />
        </>
    )
}