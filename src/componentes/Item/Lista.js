import Item from "./Item";
import "./estilos.css"

const Lista = ({ products}) => {


  return (
    
    <div>

      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            imagenes={product.imagenes}
            price={product.price}
            stock={product.stock}
            />
           
            );
            })}
           
           
    </div>

  );

};
export default Lista;
