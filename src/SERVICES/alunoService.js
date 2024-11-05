const AlunoRepository = require('../REPOSITORIES/alunoRepository');

class AlunoService {
  // Criar um novo aluno
  async create(alunoData) {
    return await AlunoRepository.create(alunoData);
  }

  // Buscar todos os alunos
  async getAll() {
    return await AlunoRepository.findAll();
  }

  // Buscar um aluno por ID
  async getById(id) {
    const aluno = await AlunoRepository.findById(id);
    if (!aluno) {
      throw new Error('Aluno não encontrado');
    }
    return aluno;
  }

  // Atualizar um aluno por ID
  async update(id, alunoData) {
    const aluno = await AlunoRepository.update(id, alunoData);
    if (!aluno) {
      throw new Error('Aluno não encontrado para atualização');
    }
    return aluno;
  }

  // Deletar um aluno por ID
  async delete(id) {
    const aluno = await AlunoRepository.delete(id);
    if (!aluno) {
      throw new Error('Aluno não encontrado para exclusão');
    }
    return aluno;
  }
}

module.exports = new AlunoService();
