import  { useEffect, useState } from 'react';
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import '../App.css'


//import {seedProducts} from '../data/seedProducts'


export const ItemListContainer = ({ greeting }) => {

  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const getProductsDB = (category) => {


    
    const myProducts = category ?
      query(collection(db, "products"), where("category", "==", category)) :
      collection(db, "products");

    
    getDocs(myProducts)
    
      .then(response => {
        const productList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        });

        
        setProducts(productList);
        setLoading(false);

      });

  }

  
  useEffect(() => {
    setLoading(true)
    getProductsDB(category)


  }, [category])

  return (
    <>

      {
        loading ?
          <div>
            <h2>Cargando Productos...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
          
          :
          <>
            {products.length === 0 && <h2>Categoria sin productos</h2>}
            {products.length > 0 && 
            <div className="productsFlex">
            <ItemList products={products} />
            </div>
            }
          </>
      }
    </>
  )

  



}

