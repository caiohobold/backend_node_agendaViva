const express = require('express');
const FuncionarioController = require('../CONTROLLERS/funcionarioController');

const router = express.Router();

// Rota para criar um novo funcionario
router.post('/', FuncionarioController.create);

// Rota para buscar todos os funcionarios
router.get('/', FuncionarioController.getAll);

// Rota para buscar um funcionario por ID
router.get('/:id', FuncionarioController.getById);

// Rota para atualizar um funcionario por ID
router.put('/:id', FuncionarioController.update);

// Rota para deletar um funcionario por ID
router.delete('/:id', FuncionarioController.delete);

module.exports = router;
