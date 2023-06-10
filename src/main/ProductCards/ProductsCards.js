import styles from "./productCards.module.css"
import { useState, useEffect } from "react";
export default function ProductCards({
  data = {},
  setIsProductOpen = ()=>{},
  setCurrentProduct = ()=>{},
}
) {
 
console.log(data)

const onOpenProduct = ()=>{
  console.log('clicked')
  setIsProductOpen(true)
  setCurrentProduct(data)
}

  return (
    
  <div className = {styles.productCard}>
    
    <img onClick = {()=>{onOpenProduct()
    }}className = {styles.image}src = {data.image} alt = {data.id}></img>
    <div className = {styles.nameBox}>
    <h3>{data.title}</h3>
    </div>
    <div className = {styles.priceAndCategory}><h4>Price : {`${data.price} $`}</h4>
    <h4>Category : {data.category}</h4>
    <h4 className ={styles.starData}>
    {data.rating.rate} 
    <img className = {styles.star}src = 'https://illustoon.com/photo/7414.png'/>
    </h4>
    </div>
    
    <p className = {styles.description}>{data.description}</p>
    
    
  </div>
  )
}
