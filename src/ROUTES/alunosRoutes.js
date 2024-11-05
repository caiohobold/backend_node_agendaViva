const express = require('express');
const AlunoController = require('../CONTROLLERS/alunoController');

const router = express.Router();

// Rota para criar um novo aluno
router.post('/', AlunoController.create);

// Rota para buscar todos os alunos
router.get('/', AlunoController.getAll);

// Rota para buscar um aluno por ID
router.get('/:id', AlunoController.getById);

// Rota para atualizar um aluno por ID
router.put('/:id', AlunoController.update);

// Rota para deletar um aluno por ID
router.delete('/:id', AlunoController.delete);

module.exports = router;
