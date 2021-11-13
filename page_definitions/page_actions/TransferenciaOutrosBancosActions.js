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
  async pesquisarContaOutrosBancos(dados) {
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

  //Método inserir agencia
  async inserirAgencia(dados) {
    const campoAgencia = await I.findById(pageTransfMidway.campos.campoAgencia);
    I.waitForElement(campoAgencia, 20);
    I.fillField(campoAgencia, dados.agencia);
  },

  //Método inserir conta midway
  async inserirContaOutrosBancos(dados) {
    const campoConta = await I.findById(pageTransfMidway.campos.campoConta);
    I.waitForElement(campoConta, 20);
    I.fillField(campoConta, dados.conta);
  },

  //Método inserir tipo de conta
  async inserirTipoDeConta() {
    const campoTipoConta = await I.findById(pageTransfMidway.campos.campoTipoConta);
    I.waitForElement(campoTipoConta, 20);
    I.tap(campoTipoConta);

    const tipoContaListado = await I.findByText(pageTransfMidway.textos.txtContaCorrente);
    I.waitForVisible(tipoContaListado, 20);
    I.tap(tipoContaListado);
    I.tap(tipoContaListado);
  },

  //Método inserir Pra quem é a transferência? Pra mim
  async inserirTransfPraMim() {
    const campoPraQuem = await I.findById(pageTransfMidway.campos.campoPraQuem);
    I.waitForElement(campoPraQuem, 20);
    I.tap(campoPraQuem);

    const pessoaListado = await I.findByText(pageTransfMidway.textos.txtPraMim);
    I.waitForElement(pessoaListado, 20);
    I.tap(pessoaListado);
  },

  //Método inserir Pra quem é a transferência? Pra outra
  async inserirTransfParaOutro(dados) {
    const campoPraQuem = await I.findById(pageTransfMidway.campos.campoPraQuem);
    I.waitForElement(campoPraQuem, 20);
    I.tap(campoPraQuem);

    const pessoaListado = await I.findByText(pageTransfMidway.textos.txtPraOutraPessoa);
    I.waitForElement(pessoaListado, 20);
    I.tap(pessoaListado);

    I.swipeDown();

    const campoNomeRazaoSocial = await I.findById(pageTransfMidway.campos.campoNomeRazaoSocial);
    I.waitForElement(campoNomeRazaoSocial, 20);
    I.fillField(campoNomeRazaoSocial, dados.nome);
    I.tap(await I.findByText(pageTransfMidway.textos.txtCampoNomeRazaoSocial));

    I.swipeDown();

    const campoCpfCnpj = await I.findById(pageTransfMidway.campos.campoCpfCnpj);
    I.waitForElement(campoCpfCnpj, 20);
    I.fillField(campoCpfCnpj, dados.cpf);
  },

  //metodo clicar no switch salvar favorecido
  async clicarBotaoSalvarFavorito() {
    const switchSalvarFavorecido = await I.findById(pageTransfMidway.botoes.switchSalvarFavorecido);
    I.waitForElement(switchSalvarFavorecido, 20);
    I.tap(switchSalvarFavorecido);
  },

  //Método clicar no botão continuar
  async clicarBotaoContinuar() {
    const btnContinuar = await I.findById(pageTransfMidway.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar);
  },

  //Método clicar no botão confirmar
  async clicarBotaoConfirmar() {
    const btnConfirmar = await I.findById(pageTransfMidway.botoes.btnConfirmar);
    I.waitForElement(btnConfirmar, 20);
    I.tap(btnConfirmar);
  },

  //Método valor que deseja transferir
  async inserirValorTransferOutrosBancos() {
    const campoValorTransferencia = await I.findById(
      pageTransfMidway.campos.campoValorTransferencia
    );
    I.waitForElement(campoValorTransferencia, 20);
    I.fillField(campoValorTransferencia, pageTransfMidway.valores.valorTransferencia);
    I.tap(await I.findByText(pageTransfMidway.textos.txtTituloPagValorTransf));
  },

  //Método aguardar campo data de agendamento
  async aguardarCampoDataAgendamento() {
    I.waitForElement(await I.findById(pageTransfMidway.campos.campoDataTransferencia), 20);
  },

  //Método inserir data de agendamento
  async inserirDataAgendamento() {
    const campoDataTransferencia = await I.findById(pageTransfMidway.campos.campoDataTransferencia);
    I.waitForElement(campoDataTransferencia, 20);
    I.fillField(campoDataTransferencia, pageTransfMidway.valores.dataTransferencia);
  },

  //Finalidade da transferência
  async inserirFinalidadeTransferencia() {
    I.swipeDown();
    const campoFinalidadeTransferencia = await I.findById(
      pageTransfMidway.campos.campoFinalidadeTransferencia
    );
    I.waitForElement(campoFinalidadeTransferencia, 20);
    I.tap(campoFinalidadeTransferencia);

    const txtRespostaFinalidadeTransferencia = await I.findByText(
      pageTransfMidway.textos.txtRespostaFinalidadeTransferencia
    );
    I.waitForVisible(txtRespostaFinalidadeTransferencia, 20);
    I.tap(txtRespostaFinalidadeTransferencia);
  },

  //Idenficação do meu extrato
  async inserirIdentificacaoExtrato() {
    I.swipeDown();
    const campoIdenficaçãoDoMeuExtrato = await I.findById(
      pageTransfMidway.campos.campoIdenficaçãoDoMeuExtrato
    );
    I.waitForElement(campoIdenficaçãoDoMeuExtrato, 20);
    I.fillField(campoIdenficaçãoDoMeuExtrato, pageTransfMidway.valores.idenficaçãoDoMeuExtrato);
  },

  async validarErroCpf() {
    const txtCpfInvalido = await I.findByText(pageTransfMidway.textos.txtCpfInvalido);
    I.waitForElement(txtCpfInvalido, 20);
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
