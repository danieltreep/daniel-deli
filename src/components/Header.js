import React from 'react';
import { Link } from 'react-router-dom';
import FilterButton from './FilterButton';
import FilterMenu from './FilterMenu';
import Search from './Search';

export default function Header(props) {

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
            <div className='goCart'>
                <p>{props.count}</p>
                <Link to="/cart">
                <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.90449 13.2071C1.84869 12.9002 2.08447 12.6176 2.39643 12.6176H39.9565C40.2685 12.6176 40.5042 12.9002 40.4484 13.2071L36.4698 35.0894C36.4266 35.3272 36.2195 35.5 35.9779 35.5H6.37504C6.13339 35.5 5.92633 35.3272 5.8831 35.0894L1.90449 13.2071Z" fill="#EBEBEB" stroke="black" strokeWidth="3"/>
                    <line x1="10.9043" y1="13.3213" x2="13.2572" y2="36.8507" stroke="black" strokeWidth="3"/>
                    <line y1="-1.5" x2="23.6468" y2="-1.5" transform="matrix(-0.0995037 0.995037 0.995037 0.0995037 32.9412 13.4706)" stroke="black" strokeWidth="3"/>
                    <path d="M3.52942 28.7647L37.6471 28.7647" stroke="black" strokeWidth="3"/>
                    <path d="M3.52942 21.7059L38.8235 21.7059" stroke="black" strokeWidth="3"/>
                    <path d="M18.8235 4.05881C18.8235 2.75932 19.8769 1.70587 21.1764 1.70587C22.4759 1.70587 23.5294 2.75932 23.5294 4.05881V19.3529C23.5294 20.6524 22.4759 21.7059 21.1764 21.7059C19.8769 21.7059 18.8235 20.6524 18.8235 19.3529V4.05881Z" fill="#EBEBEB" stroke="black" strokeWidth="3"/>
                </svg>

                </Link>
            </div>
            
            <div className='main'>
            <FilterButton show={handleShowFilter}/>
            <Search search={props.search} />
            <FilterMenu />
            </div>
        </header>
    ) 
}