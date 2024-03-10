import React, {useContext, useState} from 'react';
// import { db } from '../../firebase/config';
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {

    //INFORMACIÓN DEL CONTEXT
    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

    //DATOS DEL COMPONENT
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")

    //SUBMIT
    const manejadorFormulario = (event) => {

        //EVITAMOS QUE SE EJECUTE EL EVENTO POR DEFECTO DEL SUBMIT
        event.preventDefault()

        //ALGUNOS MANEJOS DE ERRORES
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar los campos requeridos")
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        //GENERAMOS EL OBJETO DE LA ORDEN DE COMPRA
        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //GENERAMOS LA LÓGICA PARA LA ÓRDEN Y REDUCCIÓN DEL STOCK
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db,"item",productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(() => {
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef) => {
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                console.log(error)
                setError("Se produjo un error al crear la orden")
            })

        })
        .catch((error) => {
            console.log(error)
            setError("No se puede actualizar el stock")
        })
    }



    return (
        <div>

            <h1>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>

                {/* MAPEO DE PRODUCTOS */}
                {cart.map((producto) => (

                    <div key={producto.producto.id}>

                        <p>
                            {""}
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                        <hr/>

                    </div>
                    
                    
                ))}

                {/* CAMPOS DEL FORMULARIO */}
                <div >

                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <input name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido</label>
                        <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Nombre">Teléfono</label>
                        <input name="Teléfono" type='text' onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Email">Email</label>
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion">Email Confirmacion</label>
                        <input name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>

                    <button type='submit'>Completar compra</button>

                    {error && <p style={{color: "red"}}>{error}</p>}

                    {ordenId && (
                        <strong>
                            ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                        </strong>
                    )}

                </div>
                
            </form>
        </div>
    );
};

export default Checkout;