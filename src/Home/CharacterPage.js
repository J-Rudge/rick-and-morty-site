import React from "react";
import {useLocation} from "react-router-dom";

function CharacterPage(props) {
    const location = useLocation();

    console.log(location.state);

    props = location.state;
    
    return <div className="character-card">
        <div className="character-card-img"><img src={props.character.image} alt={props.character.name} /></div>
        <div className="character-card-details">
          <h2 className="character-name">{props.character.name}</h2>
          <div className="character-card-status">
            <h4>{props.character.status} - {props.character.species}</h4>
          </div>
        </div>
      </div>
}

export default CharacterPage;