const { I } = inject();
const { Console } = require('console');
const emprestimosActions = require('../../page_definitions/page_actions/EmprestimosActions.js');
const loginActions = require('../../page_definitions/page_actions/LoginActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento com R\$"([^"]*)" de limite de crédito$/, async (_nome, _limite) => {
  await emprestimosActions.createAPaymentAccountWithLoanLimit(_limite);
});

Given(/^que "([^"]*)" possui uma conta pagamento com R\$"([^"]*)" de limite de crédito e contrato ativo$/, async (_nome, _limite) => {
  await emprestimosActions.createAPaymentAccountWithLoanLimit(_limite, 1);
});

Given(/que "([^"]*)" está logad(?:a|o) na conta midway para consultar$/, async () => {
  const config = await I.readYmlWithName('dados');
  await loginActions.fechaTelaOnboarding();
  await loginActions.selecionaOpcaoLogar();
  await loginActions.clicarBotaoFecharModalPermissoes();
  await loginActions.preencheCamposLogin({
    cpf: config.contaEmprestimoConsulta.documentNumber,
    senha: config.contaEmprestimoConsulta.password
  });
  await loginActions.selecionaOpcaoLogar();
  await loginActions.esperaHomeCarregar();
});

Given(/^el(?:e|a) aciona a opção Empréstimos$/, async () => {
  await emprestimosActions.clicarBotaoEmprestimos();
});

Given(/^el(?:e|a) aciona a opção Empréstimos pessoal$/, async () => {
  await emprestimosActions.clicarBotaoEmprestimoPessoal();
});

Given(/^el(?:e|a) aciona a opção Termos e condições gerais$/, async () => {
  await emprestimosActions.clicarBotaoTermosCondicoesGerais();
});

Given(/^el(?:e|a) acessa os Termos e condições gerais de empréstimos$/, async () => {
  await emprestimosActions.clicarBotaoEmprestimos();
  await emprestimosActions.clicarBotaoEmprestimoPessoal();
  await emprestimosActions.clicarBotaoTermosCondicoesGerais();
});

Given(/^realiza uma contratação de empréstimos no valor de R\$"([^"]*)" em 5 parcelas com vencimento de "([^"]*)" dias$/, async (_valor, _dias) => {
  await emprestimosActions.clicarBotaoSolicitarEmprestimoPessoal();
  await emprestimosActions.campoValorSolicitado(_valor);
  await emprestimosActions.clicarBotaoContinuar();
  await emprestimosActions.clicarBotaoSelecione();
  await emprestimosActions.clicarBotaoSelecionarDataCalendario(_dias);
  await emprestimosActions.clicarBotaoQtdeParcelas();
  await emprestimosActions.clicarBotaoContinuar();
  await emprestimosActions.clicarBotaoContinuar();
  await emprestimosActions.clicarBotaoContinuar();
  await emprestimosActions.clicarBotaoLiEConcordo();
  await emprestimosActions.fazerBiometriaFacialContratacaoEmprestimo();
});

Given(/^realiza uma simulação de empréstimos no valor de R\$"([^"]*)" em 5 parcelas com vencimento de "([^"]*)" dias$/, async (_valor, _dias) => {
  await emprestimosActions.clicarBotaoSolicitarEmprestimoPessoal();
  await emprestimosActions.campoValorSolicitado(_valor);
  await emprestimosActions.clicarBotaoContinuar();
  await emprestimosActions.clicarBotaoSelecione();
  await emprestimosActions.clicarBotaoSelecionarDataCalendario(_dias);
  await emprestimosActions.clicarBotaoQtdeParcelas();
  await emprestimosActions.clicarBotaoContinuar();
});

Given(/^el(?:e|a) acessa Meus Contratos$/, async () => {
  await emprestimosActions.clicarBotaoMeusContratos();
});

Given(/^seleciona a aba Pagos$/, async () => {
  await emprestimosActions.clicarBotaoAbaPagos();
});

Then(/^o APP deve realizar a contratação com sucesso$/, async () => {
  await emprestimosActions.visualizarContratacaoEmprestimo();
});

Then(/^deve ser apresentados os termos e condições gerais dos empréstimos da sua conta midway$/, async () => {
  await emprestimosActions.visualizarTermosCondicoesGerais();
});

Then(/^deve ser apresentados os contratos Sipf que estão em aberto com sucesso$/, async () => {
   await emprestimosActions.visualizarContratosEmAberto();
});

Then(/^deve ser apresentados os contratos Topaz que estão pagos com sucesso$/, async () => {
  await emprestimosActions.visualizarContratosPagos();
});

Then(/^o APP deve realizar a simulação com sucesso$/, async () => {
  await emprestimosActions.visualizarSimulacaoEmprestimo();
});
