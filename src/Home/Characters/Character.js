import React from "react";

function Character(props) {
  function handleClick() {
    props.onClick(props.id);
  }

  function handleMouseOver() {
    props.onMouseOver(props.id);
  }

  return (
    <div className="character-card" onClick={handleClick} onMouseOver={handleMouseOver}>
      <div className="character-card-img"><img src={props.image} alt={props.name} /></div>
      <div className="character-card-details">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default Character;
