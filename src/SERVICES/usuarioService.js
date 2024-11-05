const UsuarioRepository = require('../REPOSITORIES/usuarioRepository');

class UsuarioService {
  // Criar um novo usuario
  async create(usuarioData) {
    return await UsuarioRepository.create(usuarioData);
  }

  // Buscar todos os usuarios
  async getAll() {
    return await UsuarioRepository.findAll();
  }

  // Buscar um usuario por ID
  async getById(id) {
    const usuario = await UsuarioRepository.findById(id);
    if (!usuario) {
      throw new Error('Usuario não encontrado');
    }
    return usuario;
  }

  // Atualizar um usuario por ID
  async update(id, usuarioData) {
    const usuario = await UsuarioRepository.update(id, usuarioData);
    if (!usuario) {
      throw new Error('Usuario não encontrado para atualização');
    }
    return usuario;
  }

  // Deletar um usuario por ID
  async delete(id) {
    const usuario = await UsuarioRepository.delete(id);
    if (!usuario) {
      throw new Error('Usuario não encontrado para exclusão');
    }
    return usuario;
  }
}

module.exports = new UsuarioService();
