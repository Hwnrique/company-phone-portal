import React from "react";
import { useEffect, useState } from "react";
import comprasData from "../data/comprasData.json";

export default function Compras() {
  const [data, setData] = useState([]);
  const [searchBuyer, setSearchBuyer] = useState("");

  useEffect(() => {
    setData(comprasData);
  }, []);

  const filteredData = data.filter((item) => {
    const search = searchBuyer.toLowerCase();
    return (
      item.Departamento.toLowerCase().includes(search) ||
      item.Responsáveis.toLowerCase().includes(search) ||
      item.Ramal.toString().toLowerCase().includes(search)
    );
  });

  return (
    <div id="table-container">
      <input type="search"
      className="btn"
      placeholder="Pesquisar comprador..."
      onChange={(e) => setSearchBuyer(e.target.value)}
      />
      <table id="table">
        <tr id="table-title">
          <th>ID</th>
          <th>Departamento</th>
          <th>Responsáveis</th>
          <th>Ramal</th>
        </tr>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <tr id="table-components" key={item.id}>
              <td>{item.ID}</td>
              <td>{item.Departamento}</td>
              <td>{item.Responsáveis}</td>
              <td>71 - 3255 {item.Ramal}</td>
            </tr>
          ))
        ) : (
          <p className="unsearched-buyer">
            Nenhum comprador encontrado!
          </p>
        )}
      </table>
    </div>
  );
}
