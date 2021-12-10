import { useState } from "react";
import  "./boton.css"

const ComponenteUseEffect = ({ stock, initial}) => {
  const [count, setCount] = useState(initial);
  

  const addItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const quitItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;
    //   Utilizo un condicional ternario (condicional) ? (true) : (false)
    count === 1 ? alert(message) : alert( (message ) +  "s");
  };

  return (
    <>
      <div className="botones">
        <button onClick={quitItem} className="btn">-</button>
        <h3>{count}</h3>
        <button onClick={addItem} className="btn">+</button>
      </div>
      <button onClick={onAdd} className="agregar">Agregar al Carrito</button>
      
    </>
  );
};

export default ComponenteUseEffect ;