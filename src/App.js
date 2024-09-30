import React, { useState, useEffect } from 'react';
import './App.css'; // Certifique-se de que o caminho do CSS está correto

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio'); // Inicializa com "Meu Portfólio" ativo

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const newTheme = !darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <aside className="sidebar">
          <h2>
            <a href="#portfolio" onClick={() => setActiveSection('portfolio')}>
              Meu Portfólio
            </a>
          </h2>

          <ul>
            <li><a href="#sobre" onClick={() => setActiveSection('sobre')}>Sobre Mim</a></li>
            <li><a href="#projetos" onClick={() => setActiveSection('projetos')}>Projetos</a></li>
            <li><a href="#contato" onClick={() => setActiveSection('contato')}>Contato</a></li>
          </ul>

          <div className="theme-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
            <span>{darkMode ? 'Modo Escuro' : 'Modo Claro'}</span>
          </div>
        </aside>

        <main className="main-content">
          {/* Renderiza a seção "Meu Portfólio", "Sobre Mim", "Projetos" ou "Contato" */}
          {activeSection === 'portfolio' && (
            <div className="App-section full-height welcome-section animated-section">
              <h2 className="fade-in slide-in-left">Bem-vindo ao Meu Portfólio</h2>
              <p className="fade-in slide-in-right">Aqui você encontrará informações sobre mim, meus projetos e formas de contato.</p>
            </div>
          )}
          {activeSection === 'sobre' && (
            <div className="App-section full-height about-section animated-section">
              <h2 className="fade-in slide-in-left">Sobre Mim</h2>
              <p className="fade-in slide-in-right">Sou desenvolvedor back-end apaixonado por resolver problemas e construir soluções eficientes com foco em Ruby e Node.js.</p>
            </div>
          )}
          {activeSection === 'projetos' && (
            <div className="App-section full-height">
              <h2>Projetos</h2>
              <ul>
                <li>Projeto 1: <a href="https://github.com/angelosouza1/projeto1">Ver no GitHub</a></li>
                <li>Projeto 2: <a href="https://github.com/angelosouza1/projeto2">Ver no GitHub</a></li>
              </ul>
            </div>
          )}
          {activeSection === 'contato' && (
            <div className="App-section full-height">
              <h2>Contato</h2>
              <p>Email: angelosouza@gmail.com</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/angelosouza1/">Angelo Souza</a></p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
