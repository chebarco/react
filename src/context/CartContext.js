import {createContext, useState} from "react"

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCarlist] = useState([])

    function agregarAlCarrito(item){
        setCarlist(item)
    }



return(
    <CartContext.Provider value= {{
        cartList, agregarAlCarrito
    }} >
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider