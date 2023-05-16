import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';


function App() {
   return (
      <div className='App' >
         <div className='nav'>
         <Cards characters={characters} />
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         </div>
      </div>
    );
}

export default App;
