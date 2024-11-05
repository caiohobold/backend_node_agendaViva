const express = require('express');
const AgendamentoController = require('../CONTROLLERS/agendamentoController');

const router = express.Router();

// Rota para criar um novo agendamento
router.post('/', AgendamentoController.create);

// Rota para buscar todos os agendamentos
router.get('/', AgendamentoController.getAll);

// Rota para buscar um agendamento por ID
router.get('/:id', AgendamentoController.getById);

// Rota para atualizar um agendamento por ID
router.put('/:id', AgendamentoController.update);

// Rota para deletar um agendamento por ID
router.delete('/:id', AgendamentoController.delete);

module.exports = router;
