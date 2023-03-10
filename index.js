const express = require('express');
const app = express();

// Configuração do parser para o formato JSON
app.use(express.json());

// Exemplo de rota com método GET
app.get('/api/exemplo', (req, res) => {
  res.send('Exemplo de resposta GET');
});

// Exemplo de rota com método POST
app.post('/api/exemplo', (req, res) => {
  console.log(req.body); // Exibe o corpo da requisição no console
  res.send('Exemplo de resposta POST');
});

// Exemplo de rota com método PUT
app.put('/api/exemplo/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Recebido ID: ${id}`);
  console.log(req.body); // Exibe o corpo da requisição no console
  res.send(`Exemplo de resposta PUT para o ID ${id}`);
});

// Exemplo de rota com método DELETE
app.delete('/api/exemplo/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Recebido ID: ${id}`);
  res.send(`Exemplo de resposta DELETE para o ID ${id}`);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
