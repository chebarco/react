import React from 'react'
import {useState, useEffect} from 'react'
import { Fetch } from '../helpers/Fetch'
import "./productos.css"

function ListadoProductos() {

    const [productos, setProductos] = useState([])
    
    useEffect(() =>{
        Fetch
        .then(resp => setProductos(resp))
    
    }, [])
    return (
        <div class="productos">
         {productos.map((producto) => 
         <div key={producto.id} className ="col-ms-1 col-md-4">
         <div className= "card w-100 mt-5">

         <div className= "card-header">
            {producto.nombre} 
            </div>
            <div className= "card-body">
            <img src= {producto.imagenes} className="W-50" />
             </div>
             <div className= "card-body">
            {producto.precio} 
            </div>
            <div className= "card-footer">
            <button className="btn btn-outline-primary btn-block">Detalle del Producto</button>
            </div>
            </div>
            </div>


            
         )}

        </div>
    )
}

export default ListadoProductos
