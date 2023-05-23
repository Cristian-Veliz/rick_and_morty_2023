import styles from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={styles.container}>
         <button onClick={() => onClose(id)} className={styles.cerrarBoton}> X </button>
         <Link className={styles.text} to={`/detail/${id}`}>
         <img className={styles.img} src={image} alt={name} />
         <h3>Name: {name}</h3>
         <h3>Especies: {species}</h3>
         <h3>Gender: {gender}</h3>
         {/* <h2>Origin: {origin}</h2> */}
         </Link>
      </div >
   );
};
