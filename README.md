<h1>Projeto Ramais: Tabela Telefônica</h1>
    <p>
        Este projeto consiste em uma Tabela feita para organizar os ramais da empresa separados por setor, departamento e colaborador responsável.
        Pegando os dados de vários arquivos em JSON onde são armazenados e organizados na tabela.
    </p>

  <h2>Funcionalidades</h2>
    <ul>
        <li>
            <strong>Praticidade:</strong> Colaboradores pararam de ir diretamente aos setores e imprimir listas telefônicas feitas em excel, economizando tempo.
        </li>
        <li>
            <strong>Design Prático:</strong> Feito focado no visual e na facilidade de uso, todos podem usar. Além de ser feito com as cores da empresa na qual é usado.
        </li>
    </ul>


  <h2>Explicando seu funcionamento</h2>

  <p>
    Visando a praticidade do projeto e futuras atualizações na lista telefônica, o projeto consta com banco de dados em JSON, onde ele puxa todo o conteúdo necessário e através do "map"
    faz com que seja exibido todo o conteúdo na tela. Cada componente da tabela tem o seu próprio aqruivo.
  </p>

  <div style="display: block" align="center">
      <img width="290" height="716" alt="Captura de tela 2025-08-21 194745" src="https://github.com/user-attachments/assets/3f914171-7aa6-4b49-a0ff-ef5f97ba1a93" />
      <img width="295" height="628" alt="Captura de tela 2025-08-20 231135" src="https://github.com/user-attachments/assets/df30412d-1ecb-4869-bfe9-ad017d7ba3b8" />

  </div>
  <br/>

  <p align="center">
    Além de possuir seu próprio custom hook, usado para alternar entre as tabelas. 
  </p>
   <pre><code>import { useState } from "react";

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
}</code></pre>

<h2>Linguagens utilizadas no projeto</h2>

<div style="display:inline-block">
<img align="center" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML"/>
<img align="center" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
<img align="center" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS"/>
<img align="center" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
</div>

<br/>

<p>Esse foi meu primeiro projeto para uso empresarial, minha primeira experiência profissional programando, por isso fico feliz de compartilhar com a comunidade.
  A cada passo que dou, sinto que estou mais perto do objetivo.
</p>
- Link do site: https://hwnrique.github.io/company-phone-portal/
<br/>
- Espero que tenham gostado, aproveite e me siga no LinkedIn: www.linkedin.com/in/carlos-henrique-292397305
