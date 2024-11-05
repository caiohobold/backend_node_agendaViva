const FuncionarioService = require('../SERVICES/funcionarioService');

class FuncionarioController {
  async create(req, res) {
    try {
      const funcionario = await FuncionarioService.create(req.body);
      res.status(201).json(funcionario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar funcionario' });
    }
  }

  async getAll(req, res) {
    try {
      const funcionarios = await FuncionarioService.getAll();
      res.status(200).json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar funcionarios' });
    }
  }

    // Buscar um funcionario por ID
    async getById(req, res) {
      try {
        const funcionario = await FuncionarioService.getById(req.params.id);
        res.status(200).json(funcionario);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    // Atualizar um funcionario por ID
    async update(req, res) {
      try {
        const funcionario = await FuncionarioService.update(req.params.id, req.body);
        res.status(200).json(funcionario);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    // Deletar um funcionario por ID
    async delete(req, res) {
      try {
        const funcionario = await FuncionarioService.delete(req.params.id);
        res.status(200).json({ message: 'Funcionario deletado com sucesso' });
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
}

module.exports = new FuncionarioController();
