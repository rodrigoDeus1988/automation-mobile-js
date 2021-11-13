const { I } = inject();
const pageOnboarding = require('../page_objects/onboarding/PageOnboarding');

module.exports = {
  async validarAcessoTela() {
    I.waitForVisible(await I.findByText(pageOnboarding.textos.txtSuaContaMidway), 60);
  },

  async selecionarBotaoSaibaMais() {
    I.tap(await I.findById(pageOnboarding.botoes.btnSaibaMaisContaSimples));
    I.waitForVisible(await I.findById(pageOnboarding.textos.txtBeneficiosMidConta), 20);
  }
};
