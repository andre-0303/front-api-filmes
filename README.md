# Z-Flix - Frontend

Z-Flix é uma aplicação web para listar filmes consumindo uma API REST. O projeto foi desenvolvido em React e utiliza Axios para realizar as requisições HTTP.

## 🚀 Tecnologias Utilizadas

- React.js
- Axios
- Vite
- React Icons
- CSS

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto em sua máquina:

### 1. Clone o repositório
```bash
git clone https://github.com/andre-0303/front-api-filmes.git
cd front-api-filmes
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure a API Backend
Certifique-se de que a API de filmes está rodando e que a URL do backend está correta no arquivo `App.js`:
```js
const server = axios.create({
  baseURL: "http://localhost:3000", // Altere conforme a URL da API
});
```

### 4. Inicie o projeto
```bash
npm run dev
```
O projeto estará rodando em `http://localhost:5173`.

## 🎥 Funcionalidades
- Listagem de filmes
- Pesquisa de filmes por título
- Exibição de informações como poster, gênero, diretor e ano

## 📁 Estrutura do Projeto
```
front-api-filmes/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── assets/           # Imagens e arquivos estáticos
│   ├── App.js            # Componente principal
│   ├── main.jsx          # Entrada principal do app
│   ├── index.css         # Estilos globais
├── public/               # Arquivos públicos
├── package.json          # Dependências e scripts
├── vite.config.js        # Configuração do Vite
└── README.md             # Documentação
```

## 📌 Melhorias Futuras
- Paginação na listagem de filmes
- Modal com detalhes adicionais dos filmes
- Tema dark/light mode
- Integração com a API do TMDB

## 🛠️ Contribuição
Fique à vontade para contribuir!
1. Fork o repositório
2. Crie uma branch (`git checkout -b feature-nova`)
3. Commit suas alterações (`git commit -m 'Adicionando uma nova feature'`)
4. Push para o branch (`git push origin feature-nova`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

