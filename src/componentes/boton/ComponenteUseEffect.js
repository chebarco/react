import { useState } from 'react'

import React from 'react'

function ComponenteUseEffect() {
    const [count, setCount] = useState(0)

    const handlerClick = () =>{
        setCount(count+1)
    }


return(
    <div>
        <p>{count}</p>
        <button onClick={handlerClick}>-</button>
        <button onClick={handlerClick}>+</button>

        <button onClick={handlerClick}>Agregar</button>
    </div>
    )
}

export default ComponenteUseEffect
