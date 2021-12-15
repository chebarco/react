import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lista from "./Lista";

const ItemList = () => {
  const [products, setProducts] = useState([]);

 const {idCate} = useParams  

  const getProductsFetch = () => {
   fetch("../JSON/Datalist.json")
  .then((response) => response.json())
  .then((data) => setProducts( data));
 };

 useEffect(() => {
  setTimeout(() => getProductsFetch(), 3000);
  }, []);

 
  return (
    <div>
    <Lista products={products}/>
    </div>
  );
};

export default ItemList;