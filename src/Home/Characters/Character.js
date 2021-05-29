import React from "react";

function Character(props) {
  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <div>
      <img src={props.image} width="150" alt={props.name} />
      <p onClick={handleClick}>{props.name}</p>
    </div>
  );
}

export default Character;
