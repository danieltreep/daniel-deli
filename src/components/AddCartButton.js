import React from "react";

export default function AddCartButton() {

    return (
        <div className='border popupOption'>
            <button className='popupButton'>
              <a href="#home">Add to Cart</a>
              <div>
                <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.291 9.76h21.095a1 1 0 0 1 .98 1.197L23.282 21.36a1 1 0 0 1-.98.804H5.375a1 1 0 0 1-.98-.804L2.31 10.957a1 1 0 0 1 .981-1.197Z" fill="#EBEBEB" stroke="#000" strokeWidth="2"/><path transform="matrix(.10955 .99398 -.9959 .09036 6.623 10.07)" stroke="#000" strokeWidth="2" d="M0-1h13.173"/><path transform="matrix(-.10955 .99398 .9959 .09036 21.054 10.07)" stroke="#000" strokeWidth="2" d="M0-1h13.173"/><path d="M3.015 18.58H23.94M3.015 14.653h21.647" stroke="#000" strokeWidth="2"/><path d="M12.395 4.966a1.443 1.443 0 0 1 2.886 0v8.244a1.443 1.443 0 0 1-2.886 0V4.966Z" fill="#EBEBEB" stroke="#000" strokeWidth="2"/><path d="M21.054.904v5.238M18.168 3.523h5.772" stroke="#000" strokeWidth="2"/></svg>  
              </div>
            </button>
        </div>
    )
}