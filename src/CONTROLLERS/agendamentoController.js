const AgendamentoService = require('../SERVICES/agendamentoService');

class AgendamentoController {
  async create(req, res) {
    try {
      const agendamento = await AgendamentoService.create(req.body);
      res.status(201).json(agendamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar agendamento' });
    }
  }

  async getAll(req, res) {
    try {
      const agendamentos = await AgendamentoService.getAll();
      res.status(200).json(agendamentos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar agendamentos' });
    }
  }

  // Buscar um agendamento por ID
  async getById(req, res) {
    try {
      const agendamento = await AgendamentoService.getById(req.params.id);
      res.status(200).json(agendamento);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Atualizar um agendamento por ID
  async update(req, res) {
    try {
      const agendamento = await AgendamentoService.update(req.params.id, req.body);
      res.status(200).json(agendamento);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Deletar um agendamento por ID
  async delete(req, res) {
    try {
      const agendamento = await AgendamentoService.delete(req.params.id);
      res.status(200).json({ message: 'Agendamento deletado com sucesso' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new AgendamentoController();
