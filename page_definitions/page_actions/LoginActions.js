const { I } = inject();
const pageLogin = require('../page_objects/login/PageLogin.js');
const pageHome = require('../page_objects/home/PageHome.js');
const pageOnboarding = require('../page_objects/onboarding/PageOnboarding.js');
const permissionActions = require('./PermissionModalActions');
const onboardingActions = require('./OnboardingActions.js');

module.exports = {
  async createAPaymentAccountWithoutBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithoutBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async addDeviceToAccount(accountNumber, deviceId) {
    await I.addDeviceToAccount({ accountNumber, deviceId });
  },

  async fechaTelaOnboarding() {
    I.grantAllPermissions();
    I.runOnIOS(async () => {
      await permissionActions.permitir();
    });
    I.waitForVisible(await I.findByText(pageOnboarding.textos.txtSuaContaMidway), 60);

    this.clicarBotaoFecharOnboarding();
  },

  async preencheCamposLogin(dados) {
    this.preencheCampoCpf(dados);
    this.clicarBotaoContinuar();
    this.preencheCampoSenha(dados);
  },

  async preencheCpfInvalido(dados) {
    this.preencheCampoCpf(dados);
    this.clicarBotaoContinuar();
  },

  async clicarBotaoAbrirContaMidway() {
    const btnAbrirContaMidway = await I.findById(pageOnboarding.botoes.btnAbrirContaMidway);
    I.waitForElement(btnAbrirContaMidway, 20);
    I.tap(btnAbrirContaMidway, 0, 0);
  },

  async clicarBotaoFecharOnboarding() {
    const btnFechaOnboarding = await I.findById(pageOnboarding.botoes.btnFechaOnboarding);
    I.waitForElement(btnFechaOnboarding, 20);
    I.tap(btnFechaOnboarding, 0, 0);
  },

  async clicarBotaoFecharModalPermissoes() {
    const btnFechaModal = await I.findById(pageLogin.botoes.btnFechaModal);
    I.waitForElement(btnFechaModal, 20);
    I.tap(btnFechaModal, 0, 0);
  },

  async esperaOpcaoLogar() {
    const btnEntrar = await I.findById(pageLogin.botoes.btnEntrar);
    I.waitForVisible(btnEntrar, 20);
    return btnEntrar;
  },

  async selecionaOpcaoLogar() {
    const opcaoLogar = await this.esperaOpcaoLogar();
    I.tap(opcaoLogar);
  },

  async esperaHomeCarregar() {
    I.waitForElement(await I.findByText(pageHome.textos.txtSaldoDisponivel), 60);
  },

  async validaHomeCarregou() {
    I.seeElement(await I.findByText(pageHome.textos.txtSaldoDisponivel));
  },

  async abrirMinhaContaMidway() {
    I.grantAllPermissions();
    I.waitForVisible(await I.findByText(pageOnboarding.textos.txtSuaContaMidway), 60);

    I.swipeDown();

    this.clicarBotaoAbrirContaMidway();
  },

  async clicarBotaoComoCuidamosDosSeusDados() {
    const btnComoCuidamosDosSeusDados = await I.findByText(
      pageLogin.botoes.btnComoCuidamosDosSeusDados
    );
    I.waitForElement(btnComoCuidamosDosSeusDados, 20);
    I.tap(btnComoCuidamosDosSeusDados);
  },

  async validarModalComoCuidamosDosSeusDados() {
    const comoCuidamosTitle = await I.findByTextPartial(
      pageOnboarding.textos.txtComoCuidamosDosSeusDados
    );
    I.waitForElement(comoCuidamosTitle, 20);
    I.seeElement(comoCuidamosTitle);
    I.seeElement(await I.findByText(pageOnboarding.botoes.btnEntendi));
  },

  async preencheCampoCpf(dados) {
    const campoCpf = await I.findById(pageLogin.campos.campoCpf);
    I.waitForElement(campoCpf, 30);
    I.fillField(campoCpf, dados.cpf);
  },

  async clicarBotaoContinuar() {
    const btnContinuar = await I.findById(pageLogin.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 30);
    I.tap(btnContinuar);
  },

  async preencheCampoSenha(dados) {
    const campoSenha = await I.findById(pageLogin.campos.campoSenha);
    I.waitForElement(campoSenha, 20);
    I.fillField(campoSenha, dados.senha);
  },

  async validarMensagemSenhaIncorreta(index) {
    I.waitForVisible(await I.findByTextPartial(pageLogin.textos.txtSenhaIncorreta(index)), 20);
  },

  async validarModalRedefinirSenha() {
    I.waitForVisible(await I.findByTextPartial(pageLogin.textos.txtRedefinirSenha), 20);
    I.seeElement(await I.findByText(pageLogin.textos.txtRedefinirSenha));
    I.seeElement(await I.findById(pageLogin.botoes.btnOk));
  },

  async tentarLoginComSenhaErrada3Vezes() {
    const senhaIncorreta = 222222;
    await this.preencheCampoSenha({ senha: senhaIncorreta });
    await this.selecionaOpcaoLogar();
    await this.esperaOpcaoLogar();
    await this.preencheCampoSenha({ senha: senhaIncorreta });
    await this.selecionaOpcaoLogar();
    await this.validarMensagemSenhaIncorreta(1);
    await this.esperaOpcaoLogar();
    await this.preencheCampoSenha({ senha: senhaIncorreta });
    await this.selecionaOpcaoLogar();
  },

  async clicarEsqueciMinhaSenha() {
    const btnEsqueciMinhaSenha = await I.findById(pageLogin.botoes.btnEsqueciMinhaSenha);
    I.waitForVisible(btnEsqueciMinhaSenha, 20);
    I.tap(btnEsqueciMinhaSenha);
  },

  async clicarEscolherSenha() {
    const btnEscolherSenha = await I.findById(pageLogin.botoes.btnEscolherSenha);
    I.waitForVisible(btnEscolherSenha, 20);
    I.tap(btnEscolherSenha);

    I.waitForVisible(await I.findByText(pageLogin.textos.txtDicaSeguranca), 20);
  },

  async validarSenhaAlterada() {
    I.waitForElement(await I.findByTextPartial(pageLogin.textos.txtSenhaCriadaSucesso), 20);
    I.tap(await I.findByText(pageLogin.botoes.btnFazerLogin));
  },

  async fazerBiometriaFacial() {
    I.waitForElement(await I.findByText(pageLogin.textos.txtBiometriaFacil), 30);

    const btnContinuar = await I.findByText(pageLogin.textos.txtBotaoContinuar);

    await I.swipeUntilElementIsVisibleInViewPort({
      elementLocator: btnContinuar,
      direction: 'right'
    });

    I.waitForElement(btnContinuar, 30);
    I.tap(btnContinuar);

    I.waitForElement(await I.findById(pageLogin.botoes.btnCapturar), 30);
    I.tap(await I.findById(pageLogin.botoes.btnCapturar));

    I.waitForElement(btnContinuar, 30);
    I.tap(btnContinuar);
  },

  async validarSucessoBiometria() {
    const txtSucessoBiometria = await I.findByText(pageLogin.textos.txtSucessoBiometria);
    I.waitForVisible(txtSucessoBiometria, 60);
    I.seeElement(txtSucessoBiometria);
  }, 

  async validaMensagemCpfInvalido() {
    const txtMensagemCpfInvalido = await I.findByText(pageLogin.textos.txtMensagemCpfInvalido);
    I.waitForVisible(txtMensagemCpfInvalido, 60);
    I.seeElement(txtMensagemCpfInvalido);
  }
};
