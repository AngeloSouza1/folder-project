import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Portfólio</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <section id="sobre" className="App-section">
        <h2>Sobre Mim</h2>
        <p>Sou desenvolvedor back-end apaixonado por resolver problemas e construir soluções eficientes com foco em Ruby e Node.js.</p>
      </section>
      <section id="projetos" className="App-section">
        <h2>Projetos</h2>
        <ul>
          <li>
            <strong>Projeto 1:</strong> <a href="https://github.com/angelosouza1/projeto1">Ver no GitHub</a>
          </li>
          <li>
            <strong>Projeto 2:</strong> <a href="https://github.com/angelosouza1/projeto2">Ver no GitHub</a>
          </li>
        </ul>
      </section>
      <section id="contato" className="App-section">
        <h2>Contato</h2>
        <p>Email: angelosouza@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/angelosouza1/">Angelo Souza</a></p>
      </section>
    </div>
  );
}

export default App;
