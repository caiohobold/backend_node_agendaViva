const express = require('express');
const UsuarioController = require('../CONTROLLERS/usuarioController');

const router = express.Router();

// Rota para criar um novo usuario
router.post('/', UsuarioController.create);

// Rota para buscar todos os usuarios
router.get('/', UsuarioController.getAll);

// Rota para buscar um usuario por ID
router.get('/:id', UsuarioController.getById);

// Rota para atualizar um usuario por ID
router.put('/:id', UsuarioController.update);

// Rota para deletar um usuario por ID
router.delete('/:id', UsuarioController.delete);

module.exports = router;
