const AgendamentoRepository = require('../REPOSITORIES/agendamentoRepository');
const AlunoRepository = require('../REPOSITORIES/alunoRepository');
const FuncionarioRepository = require('../REPOSITORIES/funcionarioRepository');

class AgendamentoService {
  // Criar um novo agendamento
  async create(agendamentoData) {

    const { id_aluno, id_funcionario } = agendamentoData;

    const alunoExiste = await AlunoRepository.findById(id_aluno);
    if (!alunoExiste) {
      throw new Error('Aluno não encontrado');
    }

    const funcionarioExiste = await FuncionarioRepository.findById(id_funcionario);
    if (!funcionarioExiste) {
      throw new Error('Funcionário não encontrado');
    }

    const conflito = await AgendamentoRepository.verificarConflito(agendamentoData);
    if (conflito) {
      throw new Error('O funcionário já possui um agendamento nesse horário');
    }
    
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
