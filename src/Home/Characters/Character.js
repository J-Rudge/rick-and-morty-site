import React from "react";

function Character(props) {
  function handleClick() {
  }

  function handleMouseOver() {
    let elements = document.getElementsByClassName('character-name');

    if(!elements[props.id-1].classList.contains('mouse-over')) {
      elements[props.id-1].classList.add('mouse-over');
    }
  }

  function handleMouseOut() {
    let elements = document.getElementsByClassName('character-name');

    if(elements[props.id-1].classList.contains('mouse-over')) {
      elements[props.id-1].classList.remove('mouse-over');
    }
  }

  return (
    <div className="character-card" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="character-card-img"><img src={props.character.image} alt={props.character.name} /></div>
      <div className="character-card-details">
        <h2 className="character-name">{props.character.name}</h2>
        <div className="character-card-status">
          <h4>{props.character.status} - {props.character.species}</h4>
        </div>
      </div>
    </div>
  );
}

export default Character;
