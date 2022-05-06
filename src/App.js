import React, { useState } from "react";
import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";


function App() {
  
  const [min, setMin] = React.useState(0); // min é o valor inicial e setMin é o valor que será alterado
  const [max, setMax] = React.useState(10); // max é o valor inicial e setMax é o valor que será alterado


  return (
    <div className="App">
      <h1>Projeto Redux</h1>
      <div className="linha">
        <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax} ></Intervalo>
      </div>
      <div className="linha">
      
      <Media min={min} max={max}></Media>

      
      <Soma min={min} max={max}></Soma>
      
      <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>

  );
  
}



export default App;
