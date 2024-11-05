const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Funcionario = require('./funcionario');
const Aluno = require('./aluno');



const Agendamento = sequelize.define('Agendamento', {
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tipo_agendamento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Agendamento.belongsTo(Aluno, { foreignKey: 'id_aluno' });
Agendamento.belongsTo(Funcionario, { foreignKey: 'id_funcionario' });

module.exports = Agendamento;