import React from "react";

function Character(props) {
  function handleClick() {
  }

  function handleMouseOver() {
    let elements = document.getElementsByClassName('character-card-details');

    if(!elements[props.id-1].classList.contains('mouse-over')) {
      elements[props.id-1].classList.add('mouse-over');
    }
  }

  function handleMouseOut() {
    let elements = document.getElementsByClassName('character-card-details');

    if(elements[props.id-1].classList.contains('mouse-over')) {
      elements[props.id-1].classList.remove('mouse-over');
    }
  }

  return (
    <div className="character-card" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="character-card-img"><img src={props.image} alt={props.name} /></div>
      <div className="character-card-details">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default Character;
