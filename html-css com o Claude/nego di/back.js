const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsing de dados do formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS, imagens)
app.use(express.static(path.join(__dirname)));

// Rota principal - servir o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'barbearia_di.html'));
});

// Rota para receber agendamentos via POST
app.post('/agendamento', (req, res) => {
  console.log('Recebendo agendamento:', req.body);

  const { nome, telefone, servico, data, horario, obs } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !telefone || !servico || !data || !horario) {
    console.log('Erro: Campos obrigatórios faltando');
    return res.status(400).json({
      success: false,
      error: 'Todos os campos obrigatórios devem ser preenchidos.'
    });
  }

  // Criar objeto do agendamento
  const agendamento = {
    id: Date.now().toString(),
    nome: nome.trim(),
    telefone: telefone.trim(),
    servico: servico.trim(),
    data: data.trim(),
    horario: horario.trim(),
    obs: obs ? obs.trim() : '',
    criadoEm: new Date().toISOString()
  };

  // Caminho do arquivo de agendamentos
  const agendamentosPath = path.join(__dirname, 'agendamentos.json');

  // Ler agendamentos existentes ou criar array vazio
  let agendamentos = [];
  try {
    if (fs.existsSync(agendamentosPath)) {
      const data = fs.readFileSync(agendamentosPath, 'utf8');
      agendamentos = JSON.parse(data);
    }
  } catch (error) {
    console.error('Erro ao ler agendamentos.json:', error);
    // Continuar com array vazio
  }

  // Adicionar novo agendamento
  agendamentos.push(agendamento);

  // Salvar no arquivo
  try {
    fs.writeFileSync(agendamentosPath, JSON.stringify(agendamentos, null, 2));
    console.log('Agendamento salvo com sucesso:', agendamento.id);
  } catch (error) {
    console.error('Erro ao salvar agendamento:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro interno ao salvar agendamento.'
    });
  }

  // Resposta de sucesso
  res.json({
    success: true,
    message: 'Agendamento confirmado com sucesso!',
    agendamento: agendamento
  });
});

// Rota para listar agendamentos (para debug/admin)
app.get('/agendamentos', (req, res) => {
  const agendamentosPath = path.join(__dirname, 'agendamentos.json');

  try {
    if (fs.existsSync(agendamentosPath)) {
      const data = fs.readFileSync(agendamentosPath, 'utf8');
      const agendamentos = JSON.parse(data);
      res.json(agendamentos);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error('Erro ao ler agendamentos:', error);
    res.status(500).json({ error: 'Erro ao carregar agendamentos.' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Nego Di! rodando em http://localhost:${PORT}`);
  console.log(`📄 Página principal: http://localhost:${PORT}/`);
  console.log(`📋 Lista de agendamentos: http://localhost:${PORT}/agendamentos`);
});