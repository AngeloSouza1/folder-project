import React, { useState, useEffect } from 'react';
import './App.css'; // Certifique-se de que o caminho do CSS está correto
import backgroundImage from './images/img1.jpeg'; 

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
            <div id="portfolio" className="App-section full-height welcome-section animated-section">
              <h2 className="fade-in slide-in-left">Bem-vindo ao Meu Portfólio</h2>
              <p className="fade-in slide-in-right">Aqui você encontrará informações sobre mim, meus projetos e formas de contato.</p>
              <a
                href="#projetos"
                onClick={() => setActiveSection('projetos')}
                className="button-projects"
              >
                Ver Projetos
              </a>
            </div>
          )}
          {activeSection === 'sobre' && (
            <div id="sobre" className="App-section full-height about-section animated-section">
              <h2 className="fade-in slide-in-left">Sobre Mim</h2>
              <hr className="divider" /> {/* Linha divisória */}      
              <div className="about-content">
                <div className="about-text fade-in slide-in-left">
                  <p>
                    Olá! Meu nome é Angelo Souza, sou Desenvolvedor Backend e graduando em Análise e Desenvolvimento de Sistemas. 
                  </p>  
                   <p>
                    Meu objetivo atual é me formar e, em seguida, realizar uma pós-graduação em Go Lang.
                    Minhas principais tecnologias são Ruby e o Framework Rails.
                  </p>
                  <p>
                    Procuro sempre ser uma pessoa educada e respeitosa, 
                    e gosto muito de interagir com novas pessoas, compartilhando minha história e aprendendo com as experiências dos outros. 
                  </p>  
                  <p>
                    Sou estudante e desenvolvedor autônomo, sempre buscando aprimorar minhas habilidades e contribuir com projetos desafiadores.
                  </p>
                </div>
                <div className="about-image fade-in slide-in-right">
                  <img src={backgroundImage} alt="Descrição da imagem" className="banner-image" />
                </div>
              </div>
            </div>
          )}


{activeSection === 'projetos' && (
  <div id="projetos" className="App-section full-height projects-section animated-section">
    <div className="projects-content">
      <div className="projects-text fade-in slide-in-right">
        <h2 className="fade-in slide-in-left">Projetos</h2>
        <hr className="divider" /> {/* Linha divisória */}
        <p>
          Nesta seção, você encontrará uma seleção de projetos nos quais trabalhei. Cada projeto representa uma oportunidade que tive para aprender e aplicar novas tecnologias. 
          Estou sempre em busca de novos desafios e aprendizados, e ficaria feliz em compartilhar mais sobre cada um deles.
        </p>
      </div>
    </div>



    
{/* Cards de Projetos */}
<div className="projects-cards-container">
  <div className="projects-cards">
    <div className="card">
      <img src="https://github.com/user-attachments/assets/727d40f5-a9ae-4940-8f81-5ccfb69ac5aa" alt="Projeto 1" className="card-image" />
      <h3>Social Rails</h3>
      <p></p>
       <a href="https://github.com/AngeloSouza1/social-networking" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/76c63c59-d8bf-4504-ae0e-6d72049cf295" alt="Projeto 2" className="card-image" />
      <h3>List-Email-JR</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/ListEmailJR" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/f055fd41-2bcd-4553-8ae1-fafb62a2ff4f" alt="Projeto 3" className="card-image" />
      <h3>Api-Go</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/api-go" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/2d230c3c-288b-4f38-b38c-393e9c3063f4" alt="Projeto 4" className="card-image" />
      <h3>QuizApp</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/QuizApp" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/df878ef2-fafc-4933-a019-be745666d81f" alt="Projeto 5" className="card-image" />
      <h3>Gem-CPF</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/cpf_utils" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/e7ded6f5-e53b-4af3-8ce5-c3830d6f718f" alt="Projeto 6" className="card-image" />
      <h3>Gem-Estados-Brasileiros</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/estado-brasileiros-gem" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/71fb4338-d1a0-4379-ac3a-e2be55ea09f2" alt="Projeto 7" className="card-image" />
      <h3>Time-Pararel</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/Time-Pararel" className="button-projects">Ver no GitHub</a>
    </div>
    <div className="card">
      <img src="https://github.com/user-attachments/assets/5c1e5113-c827-48cc-bed0-8f8c12817b41" alt="Projeto 8" className="card-image" />
      <h3>CateqApp</h3>
      <p></p>
      <a href="https://github.com/AngeloSouza1/CateqApp" className="button-projects">Ver no GitHub</a>
    </div>
  </div>
</div>



  </div>
)}





          {activeSection === 'contato' && (
            <div id="contato" className="App-section full-height">
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
