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
            image={product.img}
            price={product.price}
            stock={product.stock}
            />
           
            );
            })}
           
           
    </div>

  );

};
export default Lista;
