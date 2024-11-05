const UsuarioService = require('../SERVICES/usuarioService');

class UsuarioController {
  async create(req, res) {
    try {
      const usuario = await UsuarioService.create(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuario' });
    }
  }

  async getAll(req, res) {
    try {
      const usuarios = await UsuarioService.getAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
  }

  // Buscar um usuario por ID
  async getById(req, res) {
    try {
      const usuario = await UsuarioService.getById(req.params.id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Atualizar um usuario por ID
  async update(req, res) {
    try {
      const usuario = await UsuarioService.update(req.params.id, req.body);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Deletar um usuario por ID
  async delete(req, res) {
    try {
      const usuario = await UsuarioService.delete(req.params.id);
      res.status(200).json({ message: 'Usuario deletado com sucesso' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new UsuarioController();
