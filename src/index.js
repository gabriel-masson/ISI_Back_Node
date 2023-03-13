const express = require('express');
const mongo = require("../model/model");
const app = express();
const cors = require('cors')

app.use(cors())


const collection = mongo.collection;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Configuração do parser para o formato JSON
app.use(express.json());

// Exemplo de rota com método GET
app.get('/api/aluno', async (req, res) => {

  //exemplo de consulta de dados
  const docs = await collection.find().toArray();
  //console.log(docs);

  res.json(docs);
});

// Exemplo de rota com método POST
app.post('/api/aluno', async (req, res) => {
  const dados = req.body;
  
  console.log(req.body); // Exibe o corpo da requisição no console

  //inserção de dados
  const result = await collection.insertOne({
    nome: dados.nome,
    idade: dados.idade,
    titulo: dados.titulo,
    linha_de_pesquisa: dados.linha_de_pesquisa
  });
console.log(result)
  res.send(result);
});

// Exemplo de rota com método PUT
app.put('/api/aluno', async (req, res) => {
  const dados = req.body;
  const result = await collection.updateOne({ nome: dados.nome }, {
    $set: {
      nome: dados.nome,
      idade: dados.idade,
      titulo: dados.titulo,
      linha_de_pesquisa: dados.linha_de_pesquisa
    }
  });
  res.send(result);
});

// Exemplo de rota com método DELETE
app.delete('/api/aluno/:nome', async (req, res) => {
  const param = req.params.nome;
  const result = await collection.deleteOne({ nome: param });
  res.send(result);
});

// Inicia o servidor na porta 3000
app.listen(3000, async () => {
  console.log('Servidor rodando na porta 3000');
  mongo.connectToDB()
});
