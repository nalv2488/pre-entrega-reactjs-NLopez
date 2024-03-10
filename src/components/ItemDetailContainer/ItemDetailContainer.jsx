import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { redirect, useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
      // const fetchData = async () => {
      //     try {
      //         const response = await fetch("/productos.json");
      //         const data = await response.json()
      //         const product = data.find((p)=>p.id == id)
      //         setProducto(product)
      //     }catch(error){
      //         console.log("Error en el fetch "+error)
      //     }
      // }

      // fetchData()

      const db = getFirestore();

      const newdoc = doc(db,"productos",id)
      
      getDoc(newdoc)
          .then((res) => {
            const data = res.data();
              const nuevosProductos = {id: res.id,...data}
              setProducto(nuevosProductos)
          })

          .catch((error) => console.log("Error en el fetch " + error))

  },[])
    
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer