const { I } = inject();

const pageEmprestimos = require('../page_objects/emprestimos/PageEmprestimos.js');
const pageToken = require('../page_fragments/Token.js');
const pageLogin = require('../page_objects/login/PageLogin.js');

module.exports = {
  async createAPaymentAccountWithLoanLimit(loanLimit, hasSipfContract = 0) {
    const paymentAccountData = await I.haveAPaymentAccount({
      payload: {
        balance: 1000,
        hasLimit: false,
        hasActivatedToken: true,
        limit: loanLimit,
        profileCode: 247,
        contractFlag: hasSipfContract,
        hashImage: pageToken.imageToken
      }
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async fazerBiometriaFacialContratacaoEmprestimo() {
    I.waitForElement(await I.findByText(pageLogin.textos.txtBiometriaFacil), 30);

    const btnContinuar = await I.findByText(pageLogin.textos.txtBotaoContinuar);

    await I.swipeUntilElementIsVisibleInViewPort({
      elementLocator: btnContinuar,
      direction: 'right'
    });

    I.waitForElement(btnContinuar, 30);
    I.tap(btnContinuar);
  },

  async clicarBotaoEmprestimos() {
    const btnEmprestimos = await I.findById(pageEmprestimos.botoes.btnEmprestimo);
    I.waitForVisible(btnEmprestimos, 60);
    I.tap(btnEmprestimos);
  },

  async clicarBotaoEmprestimoPessoal() {
    const btnEmprestimoPessoal = await I.findByText(pageEmprestimos.botoes.btnEmprestimoPessoal);
    I.waitForVisible(btnEmprestimoPessoal, 60);
    I.tap(btnEmprestimoPessoal);
  },

  async clicarBotaoTermosCondicoesGerais() {
    const btnTermosCondicoesGerais = await I.findByText(
      pageEmprestimos.botoes.btnTermosCondicoesGerais
    );
    I.waitForVisible(btnTermosCondicoesGerais, 60);
    I.tap(btnTermosCondicoesGerais);
  },

  async clicarBotaoSolicitarEmprestimoPessoal() {
    const btnSolicitarEmprestimoPessoal = await I.findByText(
      pageEmprestimos.botoes.btnSolicitarEmprestimoPessoal
    );
    I.waitForVisible(btnSolicitarEmprestimoPessoal, 60);
    I.tap(btnSolicitarEmprestimoPessoal);
  },

  async clicarBotaoContinuar() {
    const btnContinuar = await I.findByText(pageEmprestimos.botoes.btnContinuar);
    I.waitForVisible(btnContinuar, 60);
    I.tap(btnContinuar);
  },

  async clicarBotaoSelecione() {
    const btnSelecione = await I.findByText(pageEmprestimos.botoes.btnSelecione);
    I.waitForVisible(btnSelecione, 60);
    I.tap(btnSelecione);
  },

  async clicarBotaoOK() {
    const btnOK = await I.findByText(pageEmprestimos.botoes.btnOK);
    I.waitForVisible(btnOK, 60);
    I.tap(btnOK);
  },

  async campoValorSolicitado(_valor) {
    const campoValorSolicitado = await I.findById(pageEmprestimos.campos.campoValorSolicitado);
    I.waitForVisible(campoValorSolicitado, 60);
    I.fillField(campoValorSolicitado, _valor);
  },

  async clicarBotaoSelecionarDataCalendario(carencia) {
    const btnSelecionarData = await I.findById(
      pageEmprestimos.botoes.btnSelecionarData(await I.getDate('YYYY-MM-DD', carencia))
    );
    I.waitForVisible(btnSelecionarData, 60);
    I.tap(btnSelecionarData);

    const btnOKCalendario = await I.findByText(pageEmprestimos.botoes.btnOK);
    I.waitForVisible(btnOKCalendario, 60);
    I.tap(btnOKCalendario);
  },

  async clicarBotaoMeusContratos() {
    const btnMeusContratos = await I.findByText(pageEmprestimos.botoes.btnMeusContratos);
    I.waitForVisible(btnMeusContratos, 60);
    I.tap(btnMeusContratos);
  },

  async clicarBotaoAbaPagos() {
    const btnAbaPagos = await I.findByText(pageEmprestimos.botoes.btnAbaPagos);
    I.waitForVisible(btnAbaPagos, 60);
    I.tap(btnAbaPagos);
  },

  async clicarBotaoQtdeParcelas() {
    const btnSelecionarParcelas = await I.findByText(pageEmprestimos.botoes.btnSelecionarParcelas);
    I.waitForVisible(btnSelecionarParcelas, 90);
    I.seeElement(btnSelecionarParcelas);
    I.tap(btnSelecionarParcelas);

    const btnParcelas = await I.findById(pageEmprestimos.botoes.btnParcelas);
    I.waitForVisible(btnParcelas, 60);
    I.waitForVisible(btnParcelas);
    I.tap(btnParcelas);
  },

  async clicarBotaoContratar() {
    const btnContratar = await I.findByText(pageEmprestimos.botoes.btnContratar);
    I.waitForVisible(btnContratar, 60);
    I.tap(btnContratar);
  },

  async clicarBotaoLiEConcordo() {
    const btnLiEConcordo = await I.findByText(pageEmprestimos.botoes.btnLiEConcordo);
    I.waitForVisible(btnLiEConcordo, 60);
    I.tap(btnLiEConcordo);
  },

  async visualizarTermosCondicoesGerais() {
    const txtTermosCondicoesGerais = await I.findByTextPartial(
      pageEmprestimos.textos.txtTermosCondicoesGerais
    );
    I.waitForVisible(txtTermosCondicoesGerais, 60);
    I.seeElement(txtTermosCondicoesGerais);
  },

  async visualizarContratosEmAberto() {
    const txtMeusContratos = await I.findByText(pageEmprestimos.textos.txtMeusContratos);
    I.waitForVisible(txtMeusContratos, 60);
    I.seeElement(txtMeusContratos);

    const txtEmAberto = await I.findByText(pageEmprestimos.textos.txtEmAberto);
    I.waitForVisible(txtEmAberto, 60);
    I.seeElement(txtEmAberto);

    const txtValorContratado = await I.findByText(pageEmprestimos.textos.txtValorContratado);
    I.waitForVisible(txtValorContratado, 60);
    I.seeElement(txtValorContratado);

    const txtParcelas = await I.findByText(pageEmprestimos.textos.txtParcelas);
    I.waitForVisible(txtParcelas, 60);
    I.seeElement(txtParcelas);
  },

  async visualizarContratosPagos() {
    const txtLiquidado = await I.findByText(pageEmprestimos.textos.txtLiquidado);
    I.waitForVisible(txtLiquidado, 60);
    I.seeElement(txtLiquidado);
  },

  async visualizarSimulacaoEmprestimo() {
    const txtSimulacaoPronta = await I.findByText(pageEmprestimos.textos.txtSimulacaoPronta);
    I.waitForVisible(txtSimulacaoPronta, 60);
    I.seeElement(txtSimulacaoPronta);

    const txtValorTotalPagar = await I.findByText(pageEmprestimos.textos.txtValorTotalPagar);
    I.waitForVisible(txtValorTotalPagar, 60);
    I.seeElement(txtValorTotalPagar);

    const txtParcelasSimulacao = await I.findByText(pageEmprestimos.textos.txtParcelasSimulacao);
    I.waitForVisible(txtParcelasSimulacao, 60);
    I.seeElement(txtParcelasSimulacao);

    const txtCondicoesValidas = await I.findByText(pageEmprestimos.textos.txtCondicoesValidas);
    I.waitForVisible(txtCondicoesValidas, 60);
    I.seeElement(txtCondicoesValidas);

    const txtDetalhamentoCet = await I.findByText(pageEmprestimos.textos.txtDetalhamentoCet);
    I.waitForVisible(txtDetalhamentoCet, 60);
    I.seeElement(txtDetalhamentoCet);

    const txtContratar = await I.findByText(pageEmprestimos.textos.txtContratar);
    I.waitForVisible(txtContratar, 60);
    I.seeElement(txtContratar);
  },

  async visualizarContratacaoEmprestimo() {
    const txtContratacaoSucesso = await I.findByTextPartial(pageEmprestimos.textos.txtContratacaoSucesso);
    I.waitForVisible(txtContratacaoSucesso, 60);
    I.seeElement(txtContratacaoSucesso);

    const txtContratacaoParcelas = await I.findByTextPartial(pageEmprestimos.textos.txtContratacaoParcelas);
    I.waitForVisible(txtContratacaoParcelas, 60);
    I.seeElement(txtContratacaoParcelas);

    const txtParcelasSimulacao = await I.findByTextPartial(pageEmprestimos.textos.txtParcelasSimulacao);
    I.waitForVisible(txtParcelasSimulacao, 60);
    I.seeElement(txtParcelasSimulacao);

    const txtCompartilharContrato = await I.findByText(pageEmprestimos.textos.txtCompartilharContrato);
    I.waitForVisible(txtCompartilharContrato, 60);
    I.seeElement(txtCompartilharContrato);

    const btnConcluir = await I.findByText(pageEmprestimos.botoes.btnConcluir);
    I.waitForVisible(btnConcluir, 60);
    I.tap(btnConcluir);
  },
};
