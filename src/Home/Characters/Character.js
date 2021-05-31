import React from "react";

function Character(props) {
  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={props.image} width="150" alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Character;
