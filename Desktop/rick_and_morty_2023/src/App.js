import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav'
import axios from 'axios';
//import characters from './data.js';


function App() {

   const [characters, setCharacters] = useState([]);
   //Estado => characteres [{}, {}]
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };


   const onSearch = id =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = id => {
      setCharacters(characters.filter(element => element.id !== Number(id)))
   }
   return (
      <div className='App' >
      <Cards characters={characters} onClose={onClose} />
      <Nav onSearch={onSearch}/> 
      </div>
    );
}

export default App;

// recordar instalar axios 'npm install axios' e importar axios
