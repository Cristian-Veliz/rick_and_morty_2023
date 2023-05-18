import styles from "./Searchbar.module.css";


export default function SearchBar({onSearch}) {
   return (
      <div className={styles.container}>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div >
   );
}
