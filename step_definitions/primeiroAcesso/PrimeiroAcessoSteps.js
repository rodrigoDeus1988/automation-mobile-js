const primeiroAcesso = require('../../page_definitions/page_actions/PrimeiroAcessoActions');

When('Que estou na tela de Primeiro Acesso', async () => {
  await primeiroAcesso.validarAcessoTela();
});

When('ele seleciona a opção saiba mais da conta Simples', async () => {
  await primeiroAcesso.selecionarBotaoSaibaMais();
});
