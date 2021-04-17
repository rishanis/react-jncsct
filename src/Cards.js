import React from 'react';

const Cards = (props) => {
  return (
    <div style={{backgroundColor: 'teal'}}>
      <img alt='picture' src={`https://robohash.org/${ props.id }`}/>
      <h3>{ props.name }</h3>
      <p>{ props.email }</p>  
    </div>
  );
}

export default Cards;
