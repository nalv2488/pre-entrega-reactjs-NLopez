import React, {useState,useContext} from 'react';
// import "./itemdetail.css"
import "../Item/item.css"
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

    const [cart,setCart] = useState(false)

    const {agregarCarrito} = useContext(CartContext)

    const agregaItem = (count) => {

        setCart(true)

        agregarCarrito(producto,count)

    }
    return (
        <> <h1>{producto.categoria}</h1>
            <div className="card-container">
                <div className="card">
                    <img className={producto.categoria === 'Camisetas' ? 'img-catalogo-camiseta' : 'img-catalogo-entrada'} src={producto.img} alt={producto.nombre} />
                    <div className="card-body">
                        <h3 className="card-title"><strong>{producto.nombre}</strong></h3>
                        <p className="card-text">Precio: £{producto.precio}</p>
                        <p className="card-text">Entradas disponibles: {producto.cantidad}</p>
                    </div>
                    {producto.stock == 0 ? <h2>EL PRODUCTO NO TIENE STOCK</h2> : (
                cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCount initial={1} stock={producto.stock} agregaItem={agregaItem}/>
            )}
                </div>
            </div>
        </>
    );
};

export default ItemDetail