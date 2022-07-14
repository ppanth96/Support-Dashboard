import React from "react";
// import React, {useEffect, useState} from 'react'
// import { response } from '../../../server/ticketCounts';
import Sideinfo from "./benchmark/benchmark.js";
import TicketsSolved from "./solvedtickets/solvedticket";
//import Nav from 'client/src/benchmark/benchmark.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="row body">
        <div class="col s12 m4 l3 z-depth-2 center-align">
          <Sideinfo />
        </div>
        <div class="col s12 m8 l9 center-align performance">
          <TicketsSolved />
        </div>
      </div>
    </div>
    
  );
}

export default App;
