const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Especialidade = require('./especialidade');

const Funcionario = sequelize.define('Funcionario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Funcionario.belongsTo(Especialidade, { foreignKey: 'id_especialidade' });

module.exports = Funcionario;