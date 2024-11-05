const AlunoService = require('../SERVICES/alunoService');

class AlunoController {
// Criar um novo aluno
  async create(req, res) {
    try {
      const aluno = await AlunoService.create(req.body);
      res.status(201).json(aluno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Buscar todos os alunos
  async getAll(req, res) {
    try {
      const alunos = await AlunoService.getAll();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Buscar um aluno por ID
  async getById(req, res) {
    try {
      const aluno = await AlunoService.getById(req.params.id);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Atualizar um aluno por ID
  async update(req, res) {
    try {
      const aluno = await AlunoService.update(req.params.id, req.body);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Deletar um aluno por ID
  async delete(req, res) {
    try {
      const aluno = await AlunoService.delete(req.params.id);
      res.status(200).json({ message: 'Aluno deletado com sucesso' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new AlunoController();
