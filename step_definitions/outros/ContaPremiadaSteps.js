const { I } = inject();
const contaPremiada = require('../../page_definitions/page_actions/ContaPremiadaAction.js');

When('ele aciona card conta premiada', async () => {
  await contaPremiada.clicarCardContaPremiada();
  await contaPremiada.visualizarContaPremiada();
  await contaPremiada.visualizarUltimosSorteios();
});

Then('deve ser apresentar seu numero da sorte', async () => {
  await contaPremiada.clicarSaibaMais();
});
