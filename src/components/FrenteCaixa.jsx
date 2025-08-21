import { useState, useEffect } from "react";

import frenteCaixaData from "../data/frenteCaixaData.json";

export default function FrenteCaixa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(frenteCaixaData);
  }, []);

  return (
    <div id="table-container">
      <table id="table">
        <tr id="table-title">
          <th>ID</th>
          <th>Departamento</th>
          <th>Responsáveis</th>
          <th>Ramal</th>
        </tr>
        {data.map((item) => (
          <tr id="table-components" key={item.id}>
            <td>{item.ID}</td>
            <td>{item.Departamento}</td>
            <td>{item.Responsáveis}</td>
            <td>{item.Ramal}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
