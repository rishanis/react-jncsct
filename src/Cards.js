import React from 'react';
import { cardStyle, titleStyle } from './styles';

const Cards = (props) => {
  //console.log(props);
  return (
    <div style={ cardStyle }
      id={props.id}
      >
      <img alt='picture' src={`https://robohash.org/${ props.id }`}/>
      <h3 style={titleStyle}>{ props.name.toUpperCase() }</h3>
      <p>{ props.birthYear }</p>  
    </div>
  );
}

export default Cards;
