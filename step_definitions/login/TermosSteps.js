const { I } = inject();
const loginActions = require('../../page_definitions/page_actions/LoginActions.js');

Given('que {string} aciona a opção para abrir conta Midway', async _actor => {
  await loginActions.abrirMinhaContaMidway();
});

When('ele aciona a opção como cuidamos dos seus dados', async () => {
  await loginActions.clicarBotaoComoCuidamosDosSeusDados();
});

Then(
  /^deverá ser apresentada uma modal com as informacoes de como cuidamos dos seus dados$/,
  async () => {
    await loginActions.validarModalComoCuidamosDosSeusDados();
  }
);
