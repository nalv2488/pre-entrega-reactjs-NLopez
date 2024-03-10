import React from 'react'
// import "./itemdetail.css"
import "../Item/item.css"

const ItemDetail = ({ producto }) => {

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
                    <button className="btn btn-primary">Agregar al carro</button>
                </div>
            </div>
        </>
    );
};

export default ItemDetail