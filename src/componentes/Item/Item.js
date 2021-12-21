import { useState} from "react";
import { Link } from "react-router-dom";
import ComponenteUseEffect from "../boton/ComponenteUseEffect";
import "./estilos.css"

const Item = ({title, price, imagenes}) => {
     const[goCart, setgoCart] = useState(false)



     const onAdd  = () =>{
         setgoCart(true)
     }
    return(

    <div class="container">
        <div class="card">
            <div class="box">
            <div class="content">
                <h3>{title}</h3>
                <img src={imagenes} width= {'400px'} alt="img" />
                <p>${price}</p>
                {!goCart ? (<ComponenteUseEffect stock={10} initial={0} onAdd={onAdd}/>) :
                (<Link to="/cart" className="ircarrito"> Ir al carrito</Link>)
                }
               
            </div>

            </div>
        </div>

    </div>
    )
};

export default Item;