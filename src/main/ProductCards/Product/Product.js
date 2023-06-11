import styles from './product.module.css'
export default function Product({currentProduct})
{
    return(
    <div >
       <img className = {styles.image}src = {currentProduct.image} alt = {currentProduct.title}/>
       <div className = {styles.buttonsAndPrice}>
       <div className = {styles.buttons}>
       <h2 className = {styles.buyNowButton}>Buy Now</h2>
       <h2 className = {styles.addToCartButton}>Add To Cart</h2>
       </div>
       <div className = {styles.priceAndRating}>
       <h2 className = {styles.price}>{`Price : ${currentProduct.price}$`}</h2>
       <h2>{`Rating : ${currentProduct.rating.rate}`}  <img className = {styles.star} src = 'https://illustoon.com/photo/7414.png' alt = 'star'/></h2>
       </div>
       </div>
       <h1>{currentProduct.title}</h1>
       <h2>{currentProduct.description}</h2>
    </div>
    )
}