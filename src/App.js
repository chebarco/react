import 'bootstrap/dist/css/bootstrap.min.css';
import ComponenteUseEffect from './componentes/boton/ComponenteUseEffect';
import ItemListContainer from './componentes/ItemListComp/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
import ListadoProductos from './componentes/productos/ListadoProductos';


function App() {
  return (
<<<<<<< Updated upstream
      <>

        <NavBar/>

        <ItemListContainer greeting= "Bienvenidos a la Tienda Online" />
        <ListadoProductos/>
        <ComponenteUseEffect/>

    </>
=======
      <BrowserRouter>  
        
      <NavBar/>
      <Routes>
    
        <Route path="/" element ={<ItemList/>} />
        <Route path="/categoria/:idCat" element ={<ItemList/>} />

        
        </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
   
    
  );
}

export default App;
