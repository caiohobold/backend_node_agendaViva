const express = require('express');
const EspecialidadeController = require('../CONTROLLERS/especialidadeController');

const router = express.Router();

// Rota para criar um novo especialidade
router.post('/', EspecialidadeController.create);

// Rota para buscar todos os especialidades
router.get('/', EspecialidadeController.getAll);

// Rota para buscar um especialidade por ID
router.get('/:id', EspecialidadeController.getById);

// Rota para atualizar um especialidade por ID
router.put('/:id', EspecialidadeController.update);

// Rota para deletar um especialidade por ID
router.delete('/:id', EspecialidadeController.delete);

module.exports = router;
