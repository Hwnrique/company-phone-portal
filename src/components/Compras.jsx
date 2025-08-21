import React from "react";
import { useEffect, useState } from "react";
import comprasData from "../data/comprasData.json";

export default function Compras() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(comprasData);
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
            <td>99 - 1234 {item.Ramal}</td>
          </tr>
          ))}
        </table>
      </div>
  )
}
