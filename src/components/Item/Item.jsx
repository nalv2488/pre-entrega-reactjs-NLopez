import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({ producto }) => {

    return (
        <div className={producto.categoria === 'Camisetas' ? 'card-container' : 'card-container-entrada'}>
            <div className="card">
                <img className={producto.categoria === 'Camisetas' ? 'img-catalogo-camiseta' : 'img-catalogo-entrada'} src={producto.img} alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                </div>
                <Link to={`/item/${producto.id}`}>
                        <button className="btn btn-primary">Ver más</button>
                    </Link>
            </div>
        </div>
    );
};

export default Item

