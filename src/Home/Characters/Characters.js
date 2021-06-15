import React, { useState, useEffect } from "react";
import Character from "./Character";
import "./style.css";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function retrieveCharacters() {
      let response = await fetch(`https://rickandmortyapi.com/api/character`);
      response = await response.json();
      let pageCount = response["info"]["pages"];

      let tempCharacters = [];
      for(let i = 1; i < pageCount; i++) {
        let response = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);
        let character = await response.json();

        for(let j = 0; j < character["results"].length; j++) {
          tempCharacters.push(character["results"][j]);
        }
      }

      setCharacters(tempCharacters);
    }
    
    retrieveCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            id={character.id-1}
            character={character}
          />
        );
      })}
    </div>
  );
}

export default Characters;
