const { I } = inject();
const permissionModal = require('../page_fragments/PermissionModal.js');

module.exports = {
  async permitirOTempoTodo() {
    const element = await I.findByText(permissionModal.botoes.btnPermitirOTempoTodo);
    I.waitForElement(element, 20);
    I.tap(element, 0, 0);
  },

  async permitirEnquantoUsaOApp() {
    const element = await I.findByText(permissionModal.botoes.btnPermitirEnquantoUsaOApp);
    I.waitForElement(element, 20);
    I.tap(element, 0, 0);
  },

  async permitir() {
    const element = await I.findByText(permissionModal.botoes.btnPermitir);
    I.waitForElement(element, 30);
    I.tap(element, 0, 0);
  },

  async naoPermitir() {
    const element = await I.findByText(permissionModal.botoes.btnNaoPermitir);
    I.waitForElement(element, 20);
    I.tap(element, 0, 0);
  }
};
