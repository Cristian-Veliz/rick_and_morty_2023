import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav'
//import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';


function App() {
   return (
      <div className='App' >
         {/* <SearchBar onSearch={(characterID) => alert(characterID)} /> */}
      <Cards characters={characters} />
      <Nav onSearch={(characterID) => alert(characterID)}/> 
      
      </div>
    );
}

export default App;
