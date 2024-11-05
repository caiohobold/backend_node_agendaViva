const Usuario = require("../MODELS/usuario");

class UsuarioRepository {
  async create(usuarioData) {
    const usuario = await Usuario.create(usuarioData);
    return usuario;
  }

  async findAll() {
    return await Usuario.findAll();
  }

  async findById(id) {
    return await Usuario.findByPk(id);
  }

  async update(id, usuarioData) {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.update(usuarioData);
    }
    return usuario;
  }

  async delete(id) {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
    }
    return usuario;
  }
}

module.exports = new UsuarioRepository();
