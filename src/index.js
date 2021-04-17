import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import { robots } from './robots';

ReactDOM.render(
  <div>
    {
      robots.map((robot, index) => {
        return (
          <Cards name={robot.name}/>
        )
      })
    }
    
  </div>,
  document.getElementById("root"));
