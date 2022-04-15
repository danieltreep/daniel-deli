import React from "react";

export default function PopupProduct(props) {

    return (
        <div className="itemCard border popupOption">
          <div className="item">
            {props.popupProduct.svg}
          </div>  
          <p className="border price">$ {props.popupProduct.price}</p>  
        </div>
    )
}