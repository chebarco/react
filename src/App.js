import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './componentes/Item/ItemList';
import { NavBar } from './componentes/NavBar/NavBar';


function App() {
  return (
      <BrowserRouter>  
        
      <NavBar/>
      <Routes>
    
        <Route path="/" element ={<ItemList/>}

        />
       
        
        </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
