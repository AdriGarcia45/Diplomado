import "./App.css";
import { useState } from "react";
import imagen from "./assets/rick-morty.png";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const reqApi = async () => {
    const apli = await fetch("https://rickandmortyapi.com/api/character");
    console.log(apli);
    const characterApi = await apli.json();
    console.log(characterApi);
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);
   // console.log("click");
  };
  return (
    
      <div className="App">
        <header className="App-header">
        <h1 className="title">RICK & MORTY</h1>
        {characters.length > 0? (             
        <Characters characters={characters} />
        ) : (
         <>
        <img src={imagen} className="img-home" alt="imagen de rick and morty" />
        <button onClick={reqApi}  className="btn-search" >Buscar Personajes </button>
        </>
        )}
         </header>
      </div>
    
  );
}

export default App;
