const { Op } = require('sequelize');
const moment = require('moment-timezone');
const Agendamento = require('../MODELS/agendamento');

class AgendamentoRepository {
  async create(agendamentoData) {
    const { hora_inicio, hora_fim } = agendamentoData;

    console.log("Hora inicio:", hora_inicio, "Hora fim:", hora_fim);
    const agendamento = await Agendamento.create(agendamentoData);
    return agendamento;
  }

  async findAll() {
    const agendamentos = await Agendamento.findAll();
    return agendamentos.map(agendamento => ({
      ...agendamento.toJSON(),
      hora_inicio: moment(agendamento.hora_inicio).tz('America/Sao_Paulo').format(),
      hora_fim: moment(agendamento.hora_fim).tz('America/Sao_Paulo').format(),
    }))
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

  async verificarConflito({ data, hora_inicio, hora_fim, id_funcionario, id_agendamento }) {
      hora_inicio = moment.tz(hora_inicio, 'America/Sao_Paulo').toISOString();
      hora_fim = moment.tz(hora_fim, 'America/Sao_Paulo').toISOString();
      
      const conflito = await Agendamento.findOne({
          where: {
              id_funcionario,
              data,
              [Op.or]: [
                  {
                      hora_inicio: { [Op.lt]: hora_fim },
                      hora_fim: { [Op.gt]: hora_inicio },
                  },
              ],
              [Op.and]: id_agendamento ? { id: { [Op.ne]: id_agendamento } } : {},
          },
      });

      return conflito;
  }
}

module.exports = new AgendamentoRepository();
