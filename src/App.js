import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './componentes/Item/ItemList';
import Cart from './componentes/NavBar/Cart';

import { NavBar } from './componentes/NavBar/NavBar';


function App() {
  return (
      <BrowserRouter>  
        
      <NavBar/>
      <Routes>
    
        <Route path="/" element ={<ItemList/>} />
        <Route path="/categorias/:idCate" element ={<ItemList/>} />
        <Route path="/cart" element ={<Cart/>} />

        </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
