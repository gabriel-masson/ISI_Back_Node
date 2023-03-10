const mongoose = require('mongoose');

// URI de conexão fornecida pelo serviço de hospedagem online do MongoDB
const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority';

// Opções de configuração do mongoose
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// Conecta ao banco de dados
mongoose.connect(uri, options)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch(error => console.log(error.message));
