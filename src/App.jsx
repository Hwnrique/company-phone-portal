import "./App.css";
import Deposito from "./components/Deposito";
import FrenteCaixa from "./components/FrenteCaixa";
import Loja from "./components/Loja";
import NavBar from "./components/NavBar";
import Prevencao from "./components/Prevencao";
import Adm from "./components/Adm";
import { useState } from "react";
import Rh from "./components/Rh";
import Cozinha from "./components/Cozinha";

import { useTable } from "./hooks/useTable";
import Compras from "./components/Compras";

function App() {
  const tableComponents = [
    <Adm />, 
    <FrenteCaixa />,
    <Deposito />,
    <Loja />,
    <Compras />,
    <Prevencao />,
    <Rh />,
    <Cozinha />,
  ];

  const { currentTable, currentComponent, changeTable } = useTable(tableComponents);

  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="container">
        <div id="table-list">
          <label>
            <span>Administrativo</span>
            <input type="radio" name="options" id="adm" defaultChecked onClick={() => changeTable(0)}/>
          </label>

          <label>
            <span>Frente de Caixa</span>
            <input type="radio" name="options" id="frontBox" onClick={() => changeTable(1)}/>
          </label>

          <label>
            <span>Depósito</span>
            <input type="radio" name="options" id="deposity" onClick={() => changeTable(2)}/>
          </label>

          <label>
            <span>Loja</span>
            <input type="radio" name="options" id="loja" onClick={() => changeTable(3)}/>
          </label>

          <label>
            <span>Compras</span>
            <input type="radio" name="options" id="buys" onClick={() => changeTable(4)}/>
          </label>

          <label>
            <span>Prevenção</span>
            <input type="radio" name="options" id="security" onClick={() => changeTable(5)}/>
          </label>

          <label>
            <span>RH</span>
            <input type="radio" name="options" id="humanRecourses" onClick={() => changeTable(6)}/>
          </label>

          <label>
            <span>Cozinha</span>
            <input type="radio" name="options" id="kitchen" onClick={() => changeTable(7)}/>
          </label>
        </div>
        {currentComponent}
      </div>
    </div> 
  );
}

export default App;
