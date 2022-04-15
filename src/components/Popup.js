import React from "react";
import AddCartButton from './AddCartButton';
import GoCartButton from "./GoCartButton";
import PopupProduct from "./PopupProduct";

export default function Popup(props) {

  return (
    <div className="popup popupGone">
      <div className='main'>
        <svg onClick={props.closePopup} className="cross" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="13.3245" x2="12.3245" y2="3" stroke="black" strokeWidth="4" strokeLinecap="round"/>
          <line x1="12.3245" y1="13.1529" x2="2.00001" y2="2.82843" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        </svg>
        <PopupProduct 
          popupProduct={props.popupProduct}
        />
        <div className='popupOption'>
          <div className='border popupOption priceButton'>
            <p className='p'>{props.popupProduct.name}</p>
          </div>
          <AddCartButton 
            {...props}
          />
          <GoCartButton />
        </div>
      </div>
    </div>
  )
}