import { useState } from "react";

export function useTable(tables) {
  const [currentTable, setCurrentTable] = useState(0);

  function changeTable(i) {

    if(i < 0 || i>= tables.length) return

    setCurrentTable(i)

  }

  return {
    currentTable,
    currentComponent: tables[currentTable],
    changeTable
  };
}