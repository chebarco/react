import React, { useEffect, useState } from "react";
import Lista from "./Lista";
import {useParams} from "react-router-dom"

const ItemList = () => {
  const [products, setProducts] = useState([]);


  const {idCat} = useParams()





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