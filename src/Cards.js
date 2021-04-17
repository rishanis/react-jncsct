import React from 'react';
import { cardStyle, titleStyle, buttonStyle } from './styles';
import { Button } from 'evergreen-ui'

const Cards = (props) => {
  //console.log(props);
  return (
    <div style={ cardStyle }
      id={props.id}
      >
      <img alt='picture' src={`https://robohash.org/${ props.id }`}/>
      <h3 style={titleStyle}>{ props.name.toUpperCase() }</h3>
      <p>{ props.birthYear }</p>  
      <button style={buttonStyle}>VIEW</button>
    </div>
  );
}

export default Cards;
