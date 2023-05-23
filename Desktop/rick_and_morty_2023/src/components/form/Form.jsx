import React, { useState } from "react";
import styles from "./Form.module.css"
import validation from "./validation";


const Form = (props)  => {

    const [userData, setUserData] = useState({
       email: '',
       password: '', 
    })

const [errors, setErrors] = useState({
//errors= {} // si el usuario ingreso los datos bien es un {} vacio
//errors= {email: tiene.., password: tiene..}

})

const handleChange = (event) =>{
const {name, value} = event.target;
setUserData({
    ...userData,
    [name]: value,   // [name] es una propiedad dinamica
})
//console.log(userData) // para ver el valor de mi estado
setErrors(validation({
    ...userData,
    [name]: value
}))
}

const handleSubmit = (event) => {
    event.preventDefault(); // para que no recargue toda la pagina
    props.login(userData);
}
    return(
        <div className={styles.contenedor}>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input 
            type='text'
            name='email'
            value={userData.email}
            onChange={handleChange}
            />
            <p className={styles.errors}>{errors.email ? errors.email: null}</p>
            <label>Password: </label>
            <input 
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
            />
            <p className={styles.errors}>{errors.password ? errors.password: null}</p>

            <hr/>
            <button className={styles.submit} type='submit'>LOGIN</button>
               
            
        </form>
        </div>
    )
} 






export default Form; 