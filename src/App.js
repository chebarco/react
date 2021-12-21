import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './componentes/Item/ItemList';
import Cart from './componentes/NavBar/Cart';
import { NavBar } from './componentes/NavBar/NavBar';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>  
        
      <NavBar/>
      <Routes>
    
        <Route path="/" element ={<ItemList/>} />
        <Route path="/categoria/:idCate" element ={<ItemList/>} />
        <Route path="/cart" element ={<Cart/>} />


        </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
