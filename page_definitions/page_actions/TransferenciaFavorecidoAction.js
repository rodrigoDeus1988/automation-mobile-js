const { I } = inject();
const pageTransfMidway = require('../page_objects/transferencia/PageTransferenciaContasMidway.js');
const pageHome = require('../page_objects/home/PageHome.js');

module.exports = {
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

  //Método clica no atalho do primeiro favorecido da home
  async clicarPrimeiroFav() {
    const iconFavFirstHome = await I.findById(pageHome.botoes.iconFavFirstHome);
    I.waitForElement(iconFavFirstHome, 40);
    I.tap(iconFavFirstHome);
  },

  //Método clica no atalho do primeiro favorecido da Lista
  async clicarPrimeiroIconFavLista() {
    const iconFavFirstLista = await I.findById(pageTransfMidway.botoes.iconFavFirstLista);
    I.waitForElement(iconFavFirstLista, 20);
    I.tap(iconFavFirstLista);
  },

  //Informa no campo valor para transferir
  async inserirValorTransfer() {
    const campoValorTransferencia = await I.findById(
      pageTransfMidway.campos.campoValorTransferencia
    );
    I.waitForElement(campoValorTransferencia, 20);
    I.fillField(campoValorTransferencia, '10,00');
  },

  //Idenficação do meu extrato
  async inserirIdentificacaoExtrato() {
    const campoIdenficaçãoDoMeuExtrato = await I.findById(
      pageTransfMidway.campos.campoIdenficaçãoDoMeuExtrato
    );
    I.waitForElement(campoIdenficaçãoDoMeuExtrato, 20);
    I.fillField(campoIdenficaçãoDoMeuExtrato, 'Pagamento para favorecido');
  },

  //Validar comprovante da conta
  async validarComprovonte() {
    const btnVerComprovante = await I.findById(pageTransfMidway.botoes.btnVerComprovante);
    I.waitForElement(btnVerComprovante, 20);
    I.tap(btnVerComprovante);

    I.wait(5);

    const btnFecharComprovante = await I.findById(pageTransfMidway.botoes.btnFecharComprovante);
    I.waitForElement(btnFecharComprovante, 20);
    I.tap(btnFecharComprovante);
  },

  //Método clica no Card transferencia
  async clicarCardTransferencia() {
    const cardTransferencia = await I.findById(pageHome.carrossel.cardTransferencia);
    I.waitForElement(cardTransferencia, 20);
    I.tap(cardTransferencia);
  },

  //Método clica no primeiro contato da lista
  async clicarPrimeiroContatoDaLista() {
    const txtPrimeiroContatoLista = await I.findById(
      pageTransfMidway.textos.txtPrimeiroContatoLista
    );
    I.waitForElement(txtPrimeiroContatoLista, 20);
    I.tap(txtPrimeiroContatoLista);
  }
};
