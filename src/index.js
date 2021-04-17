import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import { robots } from './robots';
import { cardStyle } from './style';

ReactDOM.render(
  <div>
    {
      robots.map((robot, index) => {
        return (
            <Cards name={robot.name} id={robot.id} birthYear={robot.birthYear}/>
        )
      })
    }
  </div>,
  document.getElementById("root"));
