import React from 'react';
import FilterButton from './FilterButton';
import FilterMenu from './FilterMenu';
import Search from './Search';

export default function Header() {

    function handleShowFilter(show) {

        const filterMenu = document.querySelector(".filterMenu");
        const filterArrow = document.querySelector(".filterArrow");

        if (!show) {
            filterMenu.classList.add("filterMenuShow");
            filterArrow.classList.add("filterArrowRotate");
        } else {
            filterMenu.classList.remove("filterMenuShow");
            filterArrow.classList.remove("filterArrowRotate");
        }
    }

    return (
        <header>
            <h1>SHOP</h1>
            <div className='main'>
            <FilterButton show={handleShowFilter}/>
            <Search />
            <FilterMenu />
            </div>
        </header>
    ) 
}