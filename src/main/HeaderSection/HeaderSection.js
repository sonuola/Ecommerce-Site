import styles from "./HeaderSection.module.css";

export default function HeaderSection() {
  return (
    <div>
      <nav className={styles.navBar}>
        <h1>Ecommerce App</h1>
        <div className={styles.buttons}>
          <img className = {styles.cartImage}src='https://img.lovepik.com/free-png/20210918/lovepik-shopping-cart-png-image_400246975_wh1200.png' alt="cart"></img>  
          <p className={styles.button}>Contact us</p>
        </div>
      </nav>
    </div>
  );
}
