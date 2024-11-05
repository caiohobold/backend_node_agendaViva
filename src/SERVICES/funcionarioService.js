const FuncionarioRepository = require('../REPOSITORIES/funcionarioRepository');

class FuncionarioService {
  // Criar um novo funcionario
  async create(funcionarioData) {
    return await FuncionarioRepository.create(funcionarioData);
  }

  // Buscar todos os funcionarios
  async getAll() {
    return await FuncionarioRepository.findAll();
  }

  // Buscar um funcionario por ID
  async getById(id) {
    const funcionario = await FuncionarioRepository.findById(id);
    if (!funcionario) {
      throw new Error('Funcionario não encontrado');
    }
    return funcionario;
  }

  // Atualizar um funcionario por ID
  async update(id, funcionarioData) {
    const funcionario = await FuncionarioRepository.update(id, funcionarioData);
    if (!funcionario) {
      throw new Error('Funcionario não encontrado para atualização');
    }
    return funcionario;
  }

  // Deletar um funcionario por ID
  async delete(id) {
    const funcionario = await FuncionarioRepository.delete(id);
    if (!funcionario) {
      throw new Error('Funcionario não encontrado para exclusão');
    }
    return funcionario;
  }
}

module.exports = new FuncionarioService();
