// senha mongoISI321
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// URI de conexão fornecida pelo serviço de hospedagem online do MongoDB
const uri = "mongodb+srv://mongoISI321:mongoISI321@cluster0.6gl4cs4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
async function connectToDB() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB!');
  } catch (error) {
    console.log(error);
  }
}
//connectToDB();
const database = client.db('mydb');
const collection = database.collection('alunosISI');

module.exports = {
  connectToDB,
  collection
}


/**


exemplo de inserção de dados
const result = await collection.insertOne({ name: 'John Doe', age: 30 });
console.log(result);

exemplo de consulta de dados
const docs = await collection.find({ age: { $gte: 25 } }).toArray();
console.log(docs);

exemplo de atualização de dados
const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 35 } });
console.log(result);

exemplo de exclusão de dados
const result = await collection.deleteOne({ name: 'John Doe' });
console.log(result);

 */
