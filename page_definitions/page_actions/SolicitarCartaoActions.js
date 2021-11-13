const { I } = inject();
const PageSolicitarCartao = require('../../page_definitions/page_objects/cartoes/PageSolicitarCartao.js');

module.exports = {
  async createAPaymentAccountWithBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance({ fallback: false });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async clicarSolicitarCartao() {
    const btnSoliciarCartao = await I.findById(PageSolicitarCartao.botoes.btnSoliciarCartao);
    await I.scrollUntil({
      scrollLocator: await I.findById(PageSolicitarCartao.elements.scrollCarrocelHome),
      toElementLocator: btnSoliciarCartao,
      direction: 'right'
    });
    I.tap(btnSoliciarCartao);
    I.waitForElement(await I.findByText(PageSolicitarCartao.textos.txtCartaoDebito), 20);
  },

  async clicarAceito() {
    const btnClicarAceito = await I.findById(PageSolicitarCartao.botoes.btnClicarAceito);
    I.waitForElement(btnClicarAceito, 20);
    I.tap(btnClicarAceito);
  },

  async adicionarEndereco() {
    const btnAdicionarEndereco = await I.findById(PageSolicitarCartao.botoes.btnAdicionarEndereco);
    I.waitForElement(btnAdicionarEndereco, 20);
    I.tap(btnAdicionarEndereco);

    I.fillField(await I.findById(PageSolicitarCartao.campos.campoCep), '02526000');

    const campoNumero = await I.findById(PageSolicitarCartao.campos.campoNumero);
    I.waitForElement(campoNumero, 20);
    I.fillField(campoNumero, '500');
    I.tap(await I.findByText(PageSolicitarCartao.textos.txtEndereco), 20);

    I.swipeDown();

    const btnEnderecoConfirm = await I.findById(PageSolicitarCartao.botoes.btnEnderecoConfirm);
    I.waitForElement(btnEnderecoConfirm, 20);
    I.tap(btnEnderecoConfirm);
  },

  async confirmarEndereco() {
    const btnContinuar = await I.findById(PageSolicitarCartao.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar);

    I.waitForElement(await I.findByText(PageSolicitarCartao.textos.txtEnderecoEntrega), 20);
    const bntNaoObrigado = await I.findById(PageSolicitarCartao.botoes.bntNaoObrigado);
    I.waitForElement(bntNaoObrigado, 20);
    I.tap(bntNaoObrigado);
  },

  async solicitacaoSucesso() {
    I.waitForElement(await I.findByText(PageSolicitarCartao.textos.txtSolicitacaoSucesso), 20);
    const btnOkEndereco = await I.findById(PageSolicitarCartao.botoes.btnOkEndereco);
    I.waitForElement(btnOkEndereco, 20);
    I.tap(btnOkEndereco);

    I.waitForElement(await I.findByText(PageSolicitarCartao.textos.txtComSucesso), 20);
    I.waitForElement(btnOkEndereco, 20);
    I.tap(btnOkEndereco);
  }
};
