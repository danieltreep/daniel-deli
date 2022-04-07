import React, { useState } from 'react';

export default function FilterButton(props) {

    const [clicked, setClicked] = useState(false);

    function handleClick() {
        clicked ? setClicked(false) : setClicked(true);
        props.show(clicked);
    }

    return (
        <div className='border input filterButton' onClick={handleClick}>
            <button className='filter'>Filter</button>
            <svg className='filterArrow' width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4347 12.1403C11.0205 12.7261 11.9702 12.7261 12.556 12.1403L22.102 2.59433C22.6877 2.00854 22.6877 1.05879 22.102 0.473007C21.5162 -0.112779 20.5664 -0.112779 19.9806 0.473007L11.4954 8.95829L3.01008 0.473007C2.42429 -0.112779 1.47455 -0.112779 0.88876 0.473007C0.302973 1.05879 0.302973 2.00854 0.88876 2.59433L10.4347 12.1403ZM9.99536 9.29883V11.0796H12.9954V9.29883H9.99536Z" fill="black"/>
            </svg>
        </div>
    ) 
}