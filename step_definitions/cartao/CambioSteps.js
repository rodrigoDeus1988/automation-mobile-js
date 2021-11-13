const cambioAction = require('../../page_definitions/page_actions/CambioAction.js');

When(/^clica cotação diaria do dolar$/, async () => {
    await cambioAction.clicarCotacaoDolar();
}); 

   
Then(/^deve ser apresentado cotacao do dia$/,async () => {
    await cambioAction.validarTituloCotacao();
  });

