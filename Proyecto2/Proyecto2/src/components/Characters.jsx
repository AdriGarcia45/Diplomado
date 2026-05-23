export default function Characters({ characters }) {
  return (
    <div className="characters-container">
        <h1 className="characters">Personajes</h1>
        <button className="back-home"
        onClick={() => window.location.reload()}>
        volver al inicio
        </button>
        <div className="container-characters">
            {characters.map((character) => (
                <div className="character-container" key={character.id}>
                    <img src={character.image} alt={character.name} className="character-image"/>
                    <div className="character-info">
                        <h3 className= "">{character.name}</h3>
                        <h6 className="">
                        <span className={character.status === "Alive" ? "alive" : "dead"}></span>
                        {character.status === "Alive" ? "Vivo" : "Muerto"}
                        </h6>
                        <p> <strong>Species</strong>{character.species}</p>
                        <p> <strong>Type</strong>{character.type}</p>
                        <p> <strong>Gender</strong>{character.gender}</p>
                        <p> <strong>Origin</strong>{character.origin.name}</p>
                        <p> <strong>Last Location</strong>{character.location.name}</p> 
                        
                    </div>
                    
                </div>
                ))}
        </div>
    </div>
  );
}

