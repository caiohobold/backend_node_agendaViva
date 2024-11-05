const Agendamento = require('../MODELS/agendamento');

class AgendamentoRepository {
  async create(agendamentoData) {
    const agendamento = await Agendamento.create(agendamentoData);
    return agendamento;
  }

  async findAll() {
    return await Agendamento.findAll();
  }

  async findById(id) {
    return await Agendamento.findByPk(id);
  }

  async update(id, agendamentoData) {
    const agendamento = await Agendamento.findByPk(id);
    if (agendamento) {
      await agendamento.update(agendamentoData);
    }
    return agendamento;
  }

  async delete(id) {
    const agendamento = await Agendamento.findByPk(id);
    if (agendamento) {
      await agendamento.destroy();
    }
    return agendamento;
  }
}

module.exports = new AgendamentoRepository();
