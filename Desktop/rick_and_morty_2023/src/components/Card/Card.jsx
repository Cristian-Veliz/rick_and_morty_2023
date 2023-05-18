import styles from './Card.module.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={styles.container}>
         <button onClick={onClose} className={styles.cerrarBoton}> X </button>
         <img className={styles.img} src={image} alt={name} />
         <h3>Name: {name}</h3>
         <h3>Especies: {species}</h3>
         <h3>Gender: {gender}</h3>
         {/* <h2>{origin}</h2> */}
      </div >
   );
};
