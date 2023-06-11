import HeaderSection from "./HeaderSection/HeaderSection";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "./ProductCards/ProductsCards";
import styles from './main.module.css'
import Product from './ProductCards/Product/Product'
export default function Main() {
  

  const [products, setProducts] = useState([]);
  const[isProductOpen,setIsProductOpen] = useState(false)
  const[currentProduct,setCurrentProduct] = useState({})
  const [isSearched,setIsSearched] = useState(false)
  const[searchResults,setSearchResults] = useState('')
    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          
        });
    }, []);

  return (
    <div>
      <HeaderSection setSearchResults = {setSearchResults}isSearched = {isSearched} setIsSearched = {setIsSearched}/>
      {isProductOpen && <Product currentProduct = {currentProduct}/>}
    
     
 {searchResults === '' && !isProductOpen && 
<div className = {styles.products}>
      {products?.map((prod) => {
        return(

        <ProductCards setCurrentProduct = {setCurrentProduct}setIsProductOpen = {setIsProductOpen}data = {prod}/>
        )
      })}
      </div>
}
  {searchResults && !isProductOpen && isSearched && <div className = {styles.products}>
    {console.log(searchResults)}
      {searchResults?.map((prod) => {
        return(

        <ProductCards setCurrentProduct = {setCurrentProduct}setIsProductOpen = {setIsProductOpen}data = {prod}/>
        )
      })}
      </div>}
    </div>
  );
}
