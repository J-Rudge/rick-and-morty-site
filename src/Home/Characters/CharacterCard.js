import React from "react";
import {Link} from "react-router-dom";

function CharacterCard(props) {  
  function handleClick() {
  }

  function handleMouseOver() {
    let elements = document.getElementsByClassName('character-name');

    if(!elements[props.index].classList.contains('mouse-over')) {
      elements[props.index].classList.add('mouse-over');
    }
  }

  function handleMouseOut() {
    let elements = document.getElementsByClassName('character-name');

    if(elements[props.index].classList.contains('mouse-over')) {
      elements[props.index].classList.remove('mouse-over');
    }
  }

  return (
    <Link to={{
      pathname:`/${props.index}`,
      state: props}}
    className="character-card" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="character-card-img"><img src={props.character.image} alt={props.character.name} /></div>
      <div className="character-card-details">
        <h2 className="character-name">{props.character.name}</h2>
        <div className="character-card-status">
          <h4>{props.character.status} - {props.character.species}</h4>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
