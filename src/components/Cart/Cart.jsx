import React, {useContext} from 'react';
import { CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)

    return (
        <div>

            {cart.length == 0 
            ? 
            <>
            <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
            <Link to={"/"}>IR AL INICIO</Link>
            </>
                
                :

                <>

                <h1>lista de carrito</h1>

                {cart.map((p)=>(
                    <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem}/>
                ))}
                

                <p>Total: ${totalCarrito()}</p>

                <button onClick={vaciarCarrito}>Vaciar carrito</button>

                <Link to={"/checkout"}>
                    Completar compra
                </Link>


                </>

                

            } 
        </div>
    );
};

export default Cart;