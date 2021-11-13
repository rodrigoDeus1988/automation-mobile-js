const { I } = inject();
const pageHome = require('../page_objects/home/PageHome.js');
const pageExtrato = require('../page_objects/extrato/PageExtrato');

module.exports = {
  async createAPaymentAccountWithOutboundMovement() {
    const paymentAccountData = await I.haveAPaymentAccountWithOutboundMovement({
      fallback: 'paymentAccountWithOutboundMovement'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccountWithIncomingMovement() {
    const paymentAccountData = await I.haveAPaymentAccountWithIncommingMoviment({
      fallback: 'paymentAccountWithIncommingMoviment'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccountWithFutureMovement() {
    const paymentAccountData = await I.haveAPaymentAccountWithFutureMovement();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async selecionaOpcaoExtrato() {
    const btnExtrato = await I.findById(pageHome.botoes.btnExtrato);
    I.waitForVisible(btnExtrato, 20);
    I.tap(btnExtrato);
  },

  async visualizarPaginaExtrato() {
    I.waitForVisible(await I.findById(pageExtrato.textos.txtTituloConta), 30);
    I.seeElement(await I.findByText(pageExtrato.textos.txtExtrato));
  },

  async acessaAsMovimentacoesDeSaida() {
    const abaSaidas = await I.findById(pageExtrato.abas.abaSaidas);
    I.waitForVisible(abaSaidas, 20);
    I.tap(abaSaidas);
  },

  async validarMovimentacoesDeSaida() {
    I.waitForVisible(await I.findByIdPartial(pageExtrato.campos.campoDataMovimentacao), 20);
    const campoValorMovimentacao = await I.findByIdPartial(
      pageExtrato.campos.campoValorMovimentacao
    );
    I.waitForElement(campoValorMovimentacao, 30);
    const movimentacao = await I.grabTextFrom(campoValorMovimentacao);

    analisaMovimentacoes(movimentacao, valor => {
      I.assertText(valor, '-');
    });
  },

  async acessaAsMovimentacoesDeEntrada() {
    const abaEntradas = await I.findById(pageExtrato.abas.abaEntradas);
    I.waitForVisible(abaEntradas, 20);
    I.tap(abaEntradas);
  },

  async validarMovimentacoesDeEntrada() {
    I.waitForVisible(await I.findByIdPartial(pageExtrato.campos.campoSaldoMovimentacao), 20);
    const campoValorMovimentacao = await I.findByIdPartial(
      pageExtrato.campos.campoValorMovimentacao
    );
    I.waitForElement(campoValorMovimentacao, 30);
    const movimentacao = await I.grabTextFrom(campoValorMovimentacao);

    analisaMovimentacoes(movimentacao, valor => {
      I.assertNotText(valor, '-');
    });
  },

  async acessaAsMovimentacoesFuturas() {
    const abaFuturo = await I.findById(pageExtrato.abas.abaFuturo);
    I.waitForVisible(abaFuturo, 20);
    I.tap(abaFuturo);
  },

  async validarMovimentacoesFuturas() {
    // TODO validar valor da movimentação
    I.waitForVisible(await I.findByIdPartial(pageExtrato.campos.campoValorMovimentacao), 20);
  },

  async defineFiltroDeData(dataInicial, dataFinal) {
    const btnFiltro = await I.findById(pageExtrato.botoes.btnFiltro);
    I.waitForVisible(btnFiltro, 20);
    I.tap(btnFiltro);

    const campoDataInicial = await I.findById(pageExtrato.campos.campoDataInicial);
    I.waitForVisible(campoDataInicial, 20);
    I.fillField(campoDataInicial, dataInicial);
    I.fillField(await I.findById(pageExtrato.campos.campoDataFinal), dataFinal);

    const btnFiltrar = await I.findById(pageExtrato.botoes.btnFiltrar);
    I.waitForVisible(btnFiltrar, 20);
    I.tap(btnFiltrar);
  }
};

const analisaMovimentacoes = (movimentacao, assert) => {
  let movimentacoes = [];
  if (Array.isArray(movimentacao)) {
    movimentacoes = movimentacoes.concat(movimentacao);
  } else {
    movimentacoes.push(movimentacao);
  }
  for (const valor of movimentacoes) {
    assert(valor);
  }
};
