const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const Aluno = require('./MODELS/aluno');
const Especialidade = require('./MODELS/especialidade');
const Funcionario = require('./MODELS/funcionario');
const Agendamento = require('./MODELS/agendamento');
const Usuario = require('./MODELS/usuario');

const alunoRoutes = require('./ROUTES/alunosRoutes');
const agendamentoRoutes = require('./ROUTES/agendamentosRoutes');
const especialidadeRoutes = require('./ROUTES/especialidadesRoutes');
const funcionarioRoutes = require('./ROUTES/funcionariosRoutes');
const usuarioRoutes = require('./ROUTES/usuariosRoutes');


const app = express();

app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',  // Substitua pela URL do seu frontend
}));

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/agendamentos', agendamentoRoutes);
app.use('/especialidades', especialidadeRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/usuarios', usuarioRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

module.exports = app;
