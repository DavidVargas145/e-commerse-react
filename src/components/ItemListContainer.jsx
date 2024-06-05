import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import categories from "../data/categorias.json";

export const ItemListContainer = () => {

  
  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");



  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo("Productos");
          setProductos(res);
        } else {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria.id === categoryId))
          
        }

      })

  }, [categoryId]);


  return (
    <div className='item-List-container'>
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}


