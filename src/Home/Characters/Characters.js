import React, { useState, useEffect } from "react";
import Character from "./Character";
import "./style.css";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function retrieveCharacters() {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
          return res.json();
        })
        .then((character) => {
          let tempCharacters = [];
          var i;
          for (i = 0; i < 6; i++) {
            tempCharacters.push(character["results"][i]);
          }
          console.log(character);

          setCharacters(tempCharacters);
        });
    }

    retrieveCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            id={character.id}
            character={character}
          />
        );
      })}
    </div>
  );
}

export default Characters;
