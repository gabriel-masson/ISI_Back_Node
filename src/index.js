const express = require('express');
const mongo = require("../model/model");
const app = express();
const cors = require('cors');
const uuid = require('uuid');




const collection = mongo.collection;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Configuração do parser para o formato JSON
app.use(express.json());
app.use(cors())
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
  
 // console.log(req.body); // Exibe o corpo da requisição no console

  //inserção de dados
  const result = await collection.insertOne({
    uuid: uuid.v4(),
    nome: dados.nome,
    idade: dados.idade,
    titulo: dados.titulo,
    linha_de_pesquisa: dados.linha_de_pesquisa
  });
  res.send(result);
});

// Exemplo de rota com método PUT
app.put('/api/aluno', async (req, res) => {
  const dados = req.body;
  const result = await collection.updateOne({ uuid: dados.uuid }, {
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
app.delete('/api/aluno/:id', async (req, res) => {
  const param = req.params.id;
  const result = await collection.deleteOne({ uuid: param });
  
  res.send(result);
});

// Inicia o servidor na porta 3000
app.listen(3000, async () => {
  console.log('Servidor rodando na porta 3000');
  mongo.connectToDB()
});
