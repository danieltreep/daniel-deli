import React from "react";

export default function PopupProduct(props) {

    return (
        <div className="itemCard border popupOption">
          <div className="item">
            {props.popupProduct.svg}
          </div>
          <div className="plusminus">
              <svg onClick={() => props.handleSubtract(1)} width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="2" x2="14" y2="2" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            <p className="border price">X {props.count}</p>
            <svg onClick={() => props.handleAdd(1)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2" y1="8" x2="14" y2="8" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              <line x1="8" y1="14" x2="8" y2="2" stroke="black" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>   
        </div>
    )
}