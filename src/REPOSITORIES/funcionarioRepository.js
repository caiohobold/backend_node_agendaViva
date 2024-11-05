const Funcionario = require("../MODELS/funcionario");

class FuncionarioRepository {
  async create(funcionarioData) {
    const funcionario = await Funcionario.create(funcionarioData);
    return funcionario;
  }

  async findAll() {
    return await Funcionario.findAll();
  }

  async findById(id) {
    return await Funcionario.findByPk(id);
  }

  async update(id, funcionarioData) {
    const funcionario = await Funcionario.findByPk(id);
    if (funcionario) {
      await funcionario.update(funcionarioData);
    }
    return funcionario;
  }

  async delete(id) {
    const funcionario = await Funcionario.findByPk(id);
    if (funcionario) {
      await funcionario.destroy();
    }
    return funcionario;
  }
}

module.exports = new FuncionarioRepository();
