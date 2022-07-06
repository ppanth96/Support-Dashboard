import React from "react";
// import React, {useEffect, useState} from 'react'
// import { response } from '../../../server/ticketCounts';
import Nav from "./benchmark/benchmark.js";
//import Nav from 'client/src/benchmark/benchmark.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <button class="transparent amber-text text-darken-3">X</button>
      <button className="escape-full transparent amber-text text-darken-3">
        X
      </button>
      <div class="row body">
        <div class="col s12 m4 l3 z-depth-2 center-align">
          <Nav />
        </div>
        <div class="col s12 m8 l9 center-align performance"></div>
      </div>
    </div>
  );
}

export default App;
