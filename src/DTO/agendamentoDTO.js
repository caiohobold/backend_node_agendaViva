class AgendamentoDTO {
    constructor(id_aluno, id_funcionario, data, hora_inicio, hora_fim, tipo_agendamento) {
      this.id_aluno = id_aluno;
      this.id_funcionario = id_funcionario;
      this.data = data;
      this.hora_inicio = hora_inicio;
      this.hora_fim = hora_fim;
      this.tipo_agendamento = tipo_agendamento;
    }
  }
  
module.exports = AgendamentoDTO;