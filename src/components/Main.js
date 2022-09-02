import React from "react";
import ItemCard from "./ItemCard";

export default function Main(props) {

    const { products } = props;

    return (
        <main className="main">
            
            {products.map((product) => 
                <ItemCard 
                    key={product.id} 
                    product={product} 
                    handlePopup={props.handlePopup}
                    handleCart={props.handleCart}
                />
            )}
            
        </main>
    )
}