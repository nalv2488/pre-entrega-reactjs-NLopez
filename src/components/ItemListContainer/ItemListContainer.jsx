import React from 'react'
import { useState, useEffect } from 'react'
import "./itemlistcontainer.css"
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import { db } from '../../firebase/config';

// function ItemListContainer({ saludo }) {
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {

        const db = getFirestore();

        const misProductos =
            categoryId ?
                query(collection(db, "productos"), where("categoria", "==", categoryId))
                :
                collection(db, "productos")

        getDocs(misProductos)
            .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos)
            })

            .catch((error) => console.log("Error en el fetch " + error))

    }, [categoryId])
    return (
        <>
            <h1 className="h1-main"><strong>Tienda Oficial</strong></h1>
            <ItemList productos={productos} />


        </>
    )
}

export default ItemListContainer