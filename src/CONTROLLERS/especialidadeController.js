const EspecialidadeService = require('../SERVICES/especialidadeService');

class EspecialidadeController {
  async create(req, res) {
    try {
      const especialidade = await EspecialidadeService.create(req.body);
      res.status(201).json(especialidade);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar especialidade' });
    }
  }

  async getAll(req, res) {
    try {
      const especialidades = await EspecialidadeService.getAll();
      res.status(200).json(especialidades);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar especialidades' });
    }
  }

    // Buscar um especialidade por ID
    async getById(req, res) {
      try {
        const especialidade = await EspecialidadeService.getById(req.params.id);
        res.status(200).json(especialidade);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    // Atualizar um especialidade por ID
    async update(req, res) {
      try {
        const especialidade = await EspecialidadeService.update(req.params.id, req.body);
        res.status(200).json(especialidade);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    // Deletar um especialidade por ID
    async delete(req, res) {
      try {
        const especialidade = await EspecialidadeService.delete(req.params.id);
        res.status(200).json({ message: 'Especialidade deletado com sucesso' });
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
}

module.exports = new EspecialidadeController();
