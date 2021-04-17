import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import { robots } from './robots';

ReactDOM.render(
  <div>
    { robots.map((robot) => {
      console.log(robot)
      
    })}
  </div>,
  document.getElementById("root"));
