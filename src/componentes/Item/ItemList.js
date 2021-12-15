import React, { useEffect, useState } from "react";
import Lista from "./Lista";

const ItemList = () => {
  const [products, setProducts] = useState([]);


  const getProductsFetch = () => {
   fetch("../JSON/Datalist.json")
  .then((response) => response.json())
  .then((data) => setProducts( data));
 };

 useEffect(() => {
  setTimeout(() => getProductsFetch(), 1000);
  }, []);

 
  return (
    <div>
    <Lista products={products}/>
    </div>
  );
};

export default ItemList;