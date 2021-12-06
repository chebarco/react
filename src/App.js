import 'bootstrap/dist/css/bootstrap.min.css';
import ComponenteUseEffect from './componentes/boton/ComponenteUseEffect';
import ItemListContainer from './componentes/ItemListComp/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
import ListadoProductos from './componentes/productos/ListadoProductos';


function App() {
  return (
      <>

        <NavBar/>

        <ItemListContainer greeting= "Bienvenidos a la Tienda Online" />
        <ListadoProductos/>
        <ComponenteUseEffect/>

    </>
   
    
  );
}

export default App;
