<h1>Portal de Ramais Internos</h1>

Este projeto consiste em uma Tabela feita para organizar os ramais da empresa na qual trabalho separados por setor, departamento e colaborador responsável.

  No meu ambiente de trabalho não tínhamos um portal de ramais próprio pra nossos dados da filial, por isso, tomei a liberdade de criá-lo.

# Funcionalidades:

- Praticidade: Colaboradores pararam de ir diretamente aos setores e imprimir listas telefônicas feitas em excel, economizando tempo.

- Design Prático: Feito focado no visual e na facilidade de uso, todos podem usar. Além de ser feito com as cores da empresa na qual é usado.

# Explicando seu funcionamento:

Visando a praticidade do projeto e futuras atualizações na lista telefônica, o projeto consta com banco de dados em JSON, onde ele puxa todo o conteúdo necessário e através do "map" faz com que seja exibido todo o conteúdo na tela. Cada componente da tabela tem o seu próprio arquivo. O site foi feito em ReactJs.

<div align="center">
<img width="290" height="716" alt="Captura de tela 2025-08-21 194745" src="https://github.com/user-attachments/assets/a7c68037-878e-45f9-89e4-efe7b7c665ab" />
<img width="295" height="628" alt="Captura de tela 2025-08-20 231135" src="https://github.com/user-attachments/assets/feb079b3-9cdd-433b-9c3e-167c2f64740d" />
</div>

Além de contar com uma custom hook para o funcionamento das tabelas:

  ```bash
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
};
```

# Pesquisa para listas grandes

No setor de compras, por ser feito para puxar alguns colaboradores externos, acabmos por ter uma lista bem grande. Para evitar a rolagem longa da página, implementei um input de pesquisa, para ajudar o usuário a filtrar melhor sua busca.

```bash
  const filteredData = data.filter((item) => {
    const search = searchBuyer.toLowerCase();
    return (
      item.Departamento.toLowerCase().includes(search) ||
      item.Responsáveis.toLowerCase().includes(search) ||
      item.Ramal.toString().toLowerCase().includes(search)
    );
  });
```

Além de avisar caso a busca não tenha obtido resultados.
<img align="center" width="1365" height="327" alt="Captura de tela 2025-09-10 104338" src="https://github.com/user-attachments/assets/05442fa7-12a5-46d7-a03d-b8ee046fd630" />

# Linguagens utilizadas no projeto

<div style="display:inline-block">
<img align="center" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML"/>
<img align="center" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
<img align="center" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS"/>
<img align="center" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
</div>

---

- Gostou? Me segue no LinkedIn: www.linkedin.com/in/carlos-henrique-292397305
