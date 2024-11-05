const EspecialidadeRepository = require('../REPOSITORIES/especialidadeRepository');

class EspecialidadeService {
  // Criar um novo especialidade
  async create(especialidadeData) {
    return await EspecialidadeRepository.create(especialidadeData);
  }

  // Buscar todos os especialidades
  async getAll() {
    return await EspecialidadeRepository.findAll();
  }

  // Buscar um especialidade por ID
  async getById(id) {
    const especialidade = await EspecialidadeRepository.findById(id);
    if (!especialidade) {
      throw new Error('Especialidade não encontrado');
    }
    return especialidade;
  }

  // Atualizar um especialidade por ID
  async update(id, especialidadeData) {
    const especialidade = await EspecialidadeRepository.update(id, especialidadeData);
    if (!especialidade) {
      throw new Error('Especialidade não encontrado para atualização');
    }
    return especialidade;
  }

  // Deletar um especialidade por ID
  async delete(id) {
    const especialidade = await EspecialidadeRepository.delete(id);
    if (!especialidade) {
      throw new Error('Especialidade não encontrado para exclusão');
    }
    return especialidade;
  }
}

module.exports = new EspecialidadeService();
