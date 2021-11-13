const { I } = inject();
const pageTransfMidway = require('../page_objects/transferencia/PageTransferenciaContasMidway.js');
const pageHome = require('../page_objects/home/PageHome.js');

module.exports = {
  async createAPaymentAccountWithBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  //Método clica no Card transferencia
  async clicarCardTransferencia() {
    const cardTransferencia = await I.findById(pageHome.carrossel.cardTransferencia);
    I.waitForElement(cardTransferencia, 20);
    I.tap(cardTransferencia);
  },

  //Método clica no label InstituiçãoDaConta
  async clicarLabellInstituiçãoDaConta() {
    I.waitForVisible(await I.findByText(pageTransfMidway.textos.txtParaQueContaQuerTransferir), 20);

    const campoInstituicaoDaConta = await I.findById(
      pageTransfMidway.campos.campoInstituicaoDaConta
    );
    I.waitForElement(campoInstituicaoDaConta, 20);
    I.tap(campoInstituicaoDaConta);
  },

  //Método pesquisar outros bancos
  async pesquisarContaMidway(dados) {
    const campoPesquisaConta = await I.findById(pageTransfMidway.campos.campoPesquisaConta);
    I.waitForElement(campoPesquisaConta, 20);
    I.fillField(campoPesquisaConta, dados.banco);

    const txtPrimeiroBancoMidwayListado = await I.findById(
      pageTransfMidway.textos.txtPrimeiroBancoMidwayListado
    );
    I.waitForVisible(txtPrimeiroBancoMidwayListado, 20);
    I.tap(txtPrimeiroBancoMidwayListado);
    I.tap(txtPrimeiroBancoMidwayListado);
  },

  //Método inserir conta midway
  async inserirContaMidway(dados) {
    const campoConta = await I.findById(pageTransfMidway.campos.campoConta);
    I.waitForElement(campoConta, 20);
    I.fillField(campoConta, dados.conta);
  },

  async clicarBotaoSalvarFavorito() {
    const switchSalvarFavorecido = await I.findById(pageTransfMidway.botoes.switchSalvarFavorecido);
    I.waitForElement(switchSalvarFavorecido, 20);
    I.tap(switchSalvarFavorecido);
  },

  async validarErroConta() {
    I.waitForElement(await I.findByText(pageTransfMidway.textos.txtContaInexistente), 20);
  },

  //Método clicar no botão continuar
  async clicarBotaoContinuar() {
    const btnContinuar = await I.findById(pageTransfMidway.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar);
  },

  //Método clicar no botão continuar
  async clicarBotaoConfirmar() {
    const btnConfirmar = await I.findById(pageTransfMidway.botoes.btnConfirmar);
    I.waitForElement(btnConfirmar, 20);
    I.tap(btnConfirmar);
  },

  //Método valor que deseja transferir
  async inserirValorTransfer() {
    const campoValorTransferencia = await I.findById(
      pageTransfMidway.campos.campoValorTransferencia
    );
    I.waitForElement(campoValorTransferencia, 20);
    I.fillField(campoValorTransferencia, '10,00');
  },

  //Método aguardar campo data de agendamento
  async aguardarCampoDataAgendamento() {
    I.waitForElement(await I.findById(pageTransfMidway.campos.campoDataTransferencia), 20);
  },

  //Método inserir data de agendamento
  async inserirDataAgendamentoMidway() {
    const campoDataTransferencia = await I.findById(pageTransfMidway.campos.campoDataTransferencia);
    I.waitForElement(campoDataTransferencia, 20);
    I.fillField(campoDataTransferencia, '30122024');
  },

  //Idenficação do meu extrato
  async inserirIdentificacaoExtrato() {
    const campoIdenficaçãoDoMeuExtrato = await I.findById(
      pageTransfMidway.campos.campoIdenficaçãoDoMeuExtrato
    );
    I.waitForElement(campoIdenficaçãoDoMeuExtrato, 20);
    I.fillField(campoIdenficaçãoDoMeuExtrato, 'Pagamento de contas');
  },

  //Validar comprovante da transferência
  async validarComprovonteTransferencia() {
    const btnVerComprovante = await I.findById(pageTransfMidway.botoes.btnVerComprovante);
    I.waitForElement(btnVerComprovante, 20);
    I.tap(btnVerComprovante);

    I.waitForVisible(await I.findByText(pageTransfMidway.textos.txtComprovanteTransferencia), 20);

    const btnFecharComprovante = await I.findById(pageTransfMidway.botoes.btnFecharComprovante);
    I.waitForElement(btnFecharComprovante, 20);
    I.tap(btnFecharComprovante);
  },

  //Validar comprovante do agendamento
  async validarComprovonteAgendamento() {
    const btnVerComprovante = await I.findById(pageTransfMidway.botoes.btnVerComprovante);
    I.waitForElement(btnVerComprovante, 20);
    I.tap(btnVerComprovante);

    I.waitForVisible(
      await I.findByText(pageTransfMidway.textos.txtComprovanteAgendamentoTransferencia),
      20
    );

    const btnFecharComprovante = await I.findById(pageTransfMidway.botoes.btnFecharComprovante);
    I.waitForElement(btnFecharComprovante, 20);
    I.tap(btnFecharComprovante);
  }
};
