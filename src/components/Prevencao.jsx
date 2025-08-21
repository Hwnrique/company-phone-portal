import { useState, useEffect } from "react";

import prevencaoData from "../data/prevencaoData.json";

export default function Prevencao() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prevencaoData);
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
