import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import "./style.css";

function Characters() {
  const [characters, setCharacters] = useState([]);

  async function getPageCount() {
    let response = await fetch(`https://rickandmortyapi.com/api/character`);
    response = await response.json();
    return response["info"]["pages"];
  }

  function setCharactersRandomly(unfilteredCharacters) {
    let random = [];

    for(let i = 0; i < 6; i++) {
      random.push(Math.floor(Math.random() * unfilteredCharacters.length));
    }

    const filteredCharacters = unfilteredCharacters.filter(item => random.includes(item.id));

    setCharacters(filteredCharacters);
  }

  useEffect(() => {
    async function retrieveCharacters() {
      let pageCount = await getPageCount();
  
      let tempCharacters = [];
      for(let i = 1; i < pageCount; i++) {
        let response = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);
        let character = await response.json();
  
        for(let j = 0; j < character["results"].length; j++) {
          tempCharacters.push(character["results"][j]);
        }
      }
  
      setCharactersRandomly(tempCharacters);
    }

    retrieveCharacters();
  }, []);

  return (
    <div className="carousel">
      <i class="arrow left"></i>
      <i class="arrow right"></i>
    <div className="character-list">
      {characters.map((character, index) => {
        return (
          <CharacterCard
            key={character.id}
            id={character.id-1}
            index={index}
            character={character}
          />
        );
      })}
    </div>
    </div>
  );
}

export default Characters;
