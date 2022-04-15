import React from 'react';

export default function Search(props) {

    function closePopup() {
        const popup = document.querySelector(".popup");
        popup.classList.add("popupGone");
    }

    return (
        <input 
            type={'text'} 
            placeholder={'Search...'} 
            className={"border input"} 
            onClick={closePopup}
            onChange={(e) => props.search(e.target.value)}
        />
    ) 
}