import React from "react";
import { cardStyle, titleStyle, buttonStyle, pStyle } from "./styles";

const Cards = props => {
  
  //console.log(props);
  let age = 2021 - props.birthYear;
  let r = Math.random().toString(36);
  console.log(r);
  return (
    <div style={cardStyle} id={props.id}>
      <img alt="picture" src={`https://robohash.org/${props.id}`} />
      <h3 style={titleStyle}>{`I am ${props.name.toUpperCase()}.`}</h3>
      <p style={pStyle}>{`I am ${age} years old.`}</p>
      <p style={pStyle}>{`INDEX NO: ${r}`}</p>
      <button style={buttonStyle}>VIEW</button>
    </div>
  );
};

export default Cards;
