import React from 'react';
import { Link } from 'react-router-dom';

function Checkout(props) {
    return (
        <>
            <header>
                <h1>CHECKOUT</h1>
                <div className='main'>
                    <button className="border grid backwardButton input">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292847 8.70711C-0.0976772 8.31658 -0.0976772 7.68342 0.292847 7.29289L6.65681 0.928932C7.04733 0.538408 7.6805 0.538408 8.07102 0.928932C8.46155 1.31946 8.46155 1.95262 8.07102 2.34315L2.41417 8L8.07102 13.6569C8.46155 14.0474 8.46155 14.6805 8.07102 15.0711C7.6805 15.4616 7.04733 15.4616 6.65681 15.0711L0.292847 8.70711ZM17.1904 9H0.999954V7H17.1904V9Z" fill="black"/>
                        </svg>
                        <Link to='/cart'>Back to Cart</Link>
                    </button>
                </div>
                
            </header>
            <main>
                <div className='border checkout'>
                    <div className='pricelistItem'>
                        <p className='bold'>Product:</p> <p className='bold'>Price:</p>
                    </div>
                    {props.cart.map(item => 
                        <div className='pricelistItem' key={item.id}>
                            <p>{item.name} x {item.amount}</p> <p>$ {Number.parseFloat(item.amount * item.price).toFixed(2)}</p>
                        </div>)}
                    <div className='total'>
                        <p className='bold'>Total Price:</p> <p className='bold'>$ {Number.parseFloat(props.totalPrice).toFixed(2)}</p>
                    </div>
                </div>
                <div className='main payment'>
                    <button className='border input paymentButton'>Pay with:
                        <svg width="99" height="60" viewBox="0 0 99 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="27.5" fill="#FFBD80" stroke="black" strokeWidth="4"/>
                            <circle cx="68.1818" cy="30" r="27.5" fill="#7D68FF" stroke="black" strokeWidth="4"/>
                            <path d="M48.8864 11.2898C48.9567 11.237 49.0249 11.1868 49.0909 11.139C49.1569 11.1868 49.2251 11.237 49.2955 11.2898C50.1776 11.9514 51.3815 13.0015 52.5933 14.5163C54.9915 17.514 57.5 22.4255 57.5 30C57.5 37.5745 54.9915 42.486 52.5933 45.4837C51.3815 46.9985 50.1776 48.0486 49.2955 48.7102C49.2251 48.763 49.1569 48.8132 49.0909 48.861C49.0249 48.8132 48.9567 48.763 48.8864 48.7102C48.0043 48.0486 46.8003 46.9985 45.5885 45.4837C43.1903 42.486 40.6818 37.5745 40.6818 30C40.6818 22.4255 43.1903 17.514 45.5885 14.5163C46.8003 13.0015 48.0043 11.9514 48.8864 11.2898ZM50.2222 49.5888C50.224 49.5897 50.2234 49.5894 50.2203 49.5878L50.2222 49.5888Z" fill="#C275FF" stroke="black" strokeWidth="4"/>
                        </svg>
                    </button>
                    <button className='border input paymentButton'>Pay with:
                        <svg width="98" height="62" viewBox="0 0 98 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_32_15" fill="white">
                            <rect width="98" height="62" rx="1"/>
                            </mask>
                            <rect width="98" height="62" rx="1" fill="#DF77C8" stroke="black" strokeWidth="8" mask="url(#path-1-inside-1_32_15)"/>
                            <path d="M34.3467 59.5L63.0138 2.5H88.5989L59.9317 59.5H34.3467Z" fill="white" stroke="black" strokeWidth="4"/>
                        </svg>
                    </button>
                </div>
            </main>
        </>
        
        
    )
}

export default Checkout;