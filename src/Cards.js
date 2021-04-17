import React from 'react';

const Cards = (props) => {
  console.log(props);
  return (
    <div style={{backgroundColor: 'lightgrey'}}>
      <img alt='picture' src={`https://robohash.org/${ props.id }`}/>
      <h3>{ props.name }</h3>
      <p>{ props.birthYear }</p>  
    </div>
  );
}

export default Cards;
