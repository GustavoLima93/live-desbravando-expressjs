---
presentation:
  width: 1500
  height: 900
  theme: night.css
---
<!-- slide -->

# < Express />

- Express é um framework minimalista e flexível para criar aplicativos web com Node.js. Ele oferece um conjunto robusto de funcionalidades tanto para aplicativos web quanto móveis.

- Com diversos métodos utilitários HTTP e middleware disponíveis, você pode criar uma API robusta de forma rápida e fácil.

- Fonte: [DOC - EXPRESS](https://expressjs.com/)

<!-- slide -->

## < Express Routes />

- O roteamento no Express é a forma como um aplicativo responde a solicitações dos clientes para determinados endereços (URIs) usando métodos HTTP específicos (como GET, POST, etc.).

- Cada rota no Express pode ter uma ou mais funções que são executadas quando essa rota é acessada.

<!-- slide -->

## < Estrutura Básica de uma Função de Middleware />

- O método HTTP ao qual a função de middleware é aplicada.
  
- O caminho (rota) ao qual a função de middleware é aplicada.
  
- A função de middleware.
  
- Argumento de callback para a função de middleware, geralmente chamado de next.
  
- Argumento de resposta HTTP, chamado de res.
  
- Argumento de solicitação HTTP, chamado de req.
