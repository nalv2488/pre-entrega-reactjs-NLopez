import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./cartwidget.css"

function CartWidget() {

    const {cantidadCarrito} = useContext(CartContext)

    return (

        <>
            <i className="bi bi-cart"></i>

            <li className='li-header'>
            {/* 0 items */}
            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
            </li>
        </>

    )
}

export default CartWidget;
