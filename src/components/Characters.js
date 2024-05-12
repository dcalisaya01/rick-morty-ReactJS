export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1 className="title">Personajes</h1>
            <div className="container-characters">
                {characters.map((character,index) =>(
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ?(
                                    <>
                                        <span className="alive"/>
                                        Alive
                                    </>
                                ):(
                                    <>
                                        <span className="dead"/>
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
                <button class="button" onClick={resetCharacters}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>
                <div class="text">
                    Button
                </div>
                </button>
        </div>
    )
}
