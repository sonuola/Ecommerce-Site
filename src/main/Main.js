import HeaderSection from "./HeaderSection/HeaderSection";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "./ProductCards/ProductsCards";
import styles from './main.module.css'
import Product from './ProductCards/Product/Product'
export default function Main() {
  console.log("main");

  const [products, setProducts] = useState([]);

  const[isProductOpen,setIsProductOpen] = useState(false)

  const[currentProduct,setCurrentProduct] = useState({})
    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    // console.log(productOpen)

    // products.map((prod) => {
    //   console.log("hello");
    // });
  console.log(products);
  return (
    <div>
      <HeaderSection />
      {isProductOpen && <Product currentProduct = {currentProduct}/>}
    
     
 {!isProductOpen && 
<div className = {styles.products}>
      {products?.map((prod) => {
        // console.log(productOpen)
        return(

        <ProductCards setCurrentProduct = {setCurrentProduct}setIsProductOpen = {setIsProductOpen}data = {prod}/>
        )
      })}
      </div>
}
  
    </div>
  );
}
