import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <Cards name={robots[0].name}/>
  </div>,
  document.getElementById("root"));
