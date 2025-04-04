import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; // Importando o ícone

const server = axios.create({
  baseURL: "http://localhost:3000",
});

function App() {
  const [filmes, setFilmes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    server.get("/filmes").then((response) => {
      setFilmes(response.data);
    });
  }, []);

  // Filtrar os filmes conforme a pesquisa do usuário
  const filmesFiltrados = filmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Z-Flix</h1>
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Pesquisar filme..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      <div>
        <h3 className="catalog-title">Nosso catálogo</h3>
      </div>

      <div className="cards-container">
        {filmesFiltrados.length > 0 ? (
          filmesFiltrados.map((filme) => (
            <div className="card" key={filme.id}>
              <img src={filme.poster} alt={filme.titulo} className="poster" />
              <h2>{filme.titulo}</h2>
              <p>
                <strong>Ano:</strong> {filme.ano}
              </p>
              <p>
                <strong>Gênero:</strong> {filme.genero}
              </p>
              <p>
                <strong>Diretor:</strong> {filme.diretor}
              </p>
            </div>
          ))
        ) : (
          <p className="no-results">Nenhum filme encontrado.</p>
        )}
      </div>

      <footer>
        <p>&copy; 2025 Z-Flix. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
