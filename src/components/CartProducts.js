import React from 'react'
import CartProduct from './CartProduct';

export default function CartProducts(props) {

    const cartProducts = props.cart;

    return (
        <div className='main'>
            {cartProducts.map(product => <CartProduct product={product} key={product.id} handleRemove={props.handleRemove} handleChange={props.handleChange}/>)}
        </div>
        
    )
}
