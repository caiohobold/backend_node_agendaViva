const Especialidade = require('../MODELS/especialidade');

class EspecialidadeRepository {
  async create(especialidadeData) {
    const especialidade = await Especialidade.create(especialidadeData);
    return especialidade;
  }

  async findAll() {
    return await Especialidade.findAll();
  }

  async findById(id) {
    return await Especialidade.findByPk(id);
  }

  async update(id, especialidadeData) {
    const especialidade = await Especialidade.findByPk(id);
    if (especialidade) {
      await especialidade.update(especialidadeData);
    }
    return especialidade;
  }

  async delete(id) {
    const especialidade = await Especialidade.findByPk(id);
    if (especialidade) {
      await especialidade.destroy();
    }
    return especialidade;
  }
}

module.exports = new EspecialidadeRepository();
