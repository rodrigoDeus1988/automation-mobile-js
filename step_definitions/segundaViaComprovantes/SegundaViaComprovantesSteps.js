const SegundaViaComprovantesActions = require('../../page_definitions/page_actions/SegundaViaComprovantesActions.js');

When(/^ele seleciona a opção de segunda via comprovantes$/, async _nome => {
  await SegundaViaComprovantesActions.selecionaOpcaoSegundaViaComprovantes();
});

Then(/^ele deve ver a tela de segunda via de comprovantes$/, async () => {
  await SegundaViaComprovantesActions.mostraTelaComprovantes();
});

When(/^ele seleciona a opção de segunda via comprovantes na lista interna$/, async () => {
  await SegundaViaComprovantesActions.selecionaOpcaoInternaSegundaViaComprovantes();
});

Then(/^ele deve ver a tela com a lista de segunda via de comprovantes$/, async () => {
  await SegundaViaComprovantesActions.mostraTeladeListadeComprovantes();
});
