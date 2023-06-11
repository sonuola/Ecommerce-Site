import styles from "./HeaderSection.module.css";
import SearchBar from "./Searchbar/SearchBar";
export default function HeaderSection({setSearchResults = ()=>{},setIsSearched = ()=>{}, isSearched}) {

  return (
    <div>
      <nav className={styles.navBar}>
        <h1>Ecommerce App</h1>
        
        <div className={styles.buttons}>
          <div className = {styles.searchBarAndValues}>
          <SearchBar isSearched = {isSearched} setIsSearched = {setIsSearched} setSearchResults = {setSearchResults}/>
          </div>
          <img className = {styles.cartImage}src='https://img.lovepik.com/free-png/20210918/lovepik-shopping-cart-png-image_400246975_wh1200.png' alt="cart"></img>  
          <p className={styles.button}>Contact us</p>
        </div>
       
      </nav>
    </div>
  );
}
