import React from "react";
import { Link } from "react-router-dom";

export default function GoCartButton() {

    return (
        <button className='popupButton border popupOption forwardButton'>
          <Link to='/cart'>Go to Cart</Link>
          <svg className="arrow" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2308 8.2885C17.6214 7.89797 17.6214 7.26481 17.2308 6.87428L10.8669 0.510323C10.4763 0.119798 9.84318 0.119798 9.45266 0.510323C9.06214 0.900847 9.06214 1.53401 9.45266 1.92454L15.1095 7.58139L9.45266 13.2382C9.06214 13.6288 9.06214 14.2619 9.45266 14.6525C9.84318 15.043 10.4763 15.043 10.8669 14.6525L17.2308 8.2885ZM0.333252 8.58139H16.5237V6.58139H0.333252V8.58139Z" fill="black"/>
          </svg>
        </button>
    )
}