const AgendamentoRepository = require('../REPOSITORIES/agendamentoRepository');

class AgendamentoService {
  // Criar um novo agendamento
  async create(agendamentoData) {
    return await AgendamentoRepository.create(agendamentoData);
  }

  // Buscar todos os agendamentos
  async getAll() {
    return await AgendamentoRepository.findAll();
  }

  // Buscar um agendamento por ID
  async getById(id) {
    const agendamento = await AgendamentoRepository.findById(id);
    if (!agendamento) {
      throw new Error('Agendamento não encontrado');
    }
    return agendamento;
  }

  // Atualizar um agendamento por ID
  async update(id, agendamentoData) {
    const agendamento = await AgendamentoRepository.update(id, agendamentoData);
    if (!agendamento) {
      throw new Error('Agendamento não encontrado para atualização');
    }
    return agendamento;
  }

  // Deletar um agendamento por ID
  async delete(id) {
    const agendamento = await AgendamentoRepository.delete(id);
    if (!agendamento) {
      throw new Error('Agendamento não encontrado para exclusão');
    }
    return agendamento;
  }
}

module.exports = new AgendamentoService();
