import { useState } from "react";
import  "./boton.css"

const ComponenteUseEffect = ({ stock, initial, onAdd}) => {
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

  
  return (
    <>
      <div className="botones">
        <button onClick={quitItem} className="btn">-</button>
        <h3>{count}</h3>
        <button onClick={addItem} className="btn">+</button>
      </div>
      <button disabled={count=== 0} onClick={() => onAdd(count)} className="agregar">Agregar al Carrito</button>
      
    </>
  );
};

export default ComponenteUseEffect ;