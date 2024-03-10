import React from 'react'
import "./cartwidget.css"

function CartWidget() {
    return (

        <>

            {/* <img src="./img/cart.png" alt="" srcset="" /> */}


            <i class="bi bi-cart"></i>

            <li className='li-header'>
                0 items
            </li>
        </>

    )
}

export default CartWidget