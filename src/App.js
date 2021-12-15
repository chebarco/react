import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/Item/ItemDetailContainer';
import ItemList from './componentes/Item/ItemList';
import Cart from './componentes/NavBar/Cart';

import { NavBar } from './componentes/NavBar/NavBar';


function App() {
  return (
      <BrowserRouter>  
        
      <NavBar/>
      <Routes>
    
        <Route path="/" element ={<ItemList/>} />
        <Route path="/categoria/:idCate" element ={<ItemList/>} />
        <Route path="/cart" element ={<Cart/>} />
        <Route path="/detalle" element ={<ItemDetailContainer/>} />


        </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
