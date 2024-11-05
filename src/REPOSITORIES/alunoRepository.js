const Aluno = require('../MODELS/aluno');

class AlunoRepository {
  async create(alunoData) {
    const aluno = await Aluno.create(alunoData);
    return aluno;
  }

  async findAll() {
    return await Aluno.findAll();
  }

  async findById(id) {
    return await Aluno.findByPk(id);
  }

  async update(id, alunoData) {
    const aluno = await Aluno.findByPk(id);
    if (aluno) {
      await aluno.update(alunoData);
    }
    return aluno;
  }

  async delete(id) {
    const aluno = await Aluno.findByPk(id);
    if (aluno) {
      await aluno.destroy();
    }
    return aluno;
  }
}

module.exports = new AlunoRepository();
