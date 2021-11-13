const bloqueioDefinitivoAction = require('../../page_definitions/page_actions/BloqueioCartoes.js');
const congigurarSenhaCartao = require('../../page_definitions/page_actions/ConfiguracaoSenhaCartaoAction.js');

When(/^ele aciona aba cartoes$/, async () => {
    
    await bloqueioDefinitivoAction.clicarCartoesTsys();  
}); 

When(/^clica opcao Configuracao de senha$/, async () => {
    await bloqueioDefinitivoAction.clicarEngrenagem(); 
    await congigurarSenhaCartao.clicarConfigurarSenhaCartao();
}); 

When(/^seleciona Desbloquear senha do cartao$/, async () => {
    await congigurarSenhaCartao.clicarDesbloqueioSenha();
    await congigurarSenhaCartao.clicarContinuarSenha();
}); 

   
Then(/^deve ser apresentado senha desbloqueada$/,async () => {
    await congigurarSenhaCartao.clicarVoltarCartoes(); 
  });

When(/^seleciona alterar senha do cartao$/, async () => {
    await congigurarSenhaCartao.clicarAlterarSenhaCartao();
    await congigurarSenhaCartao.clicarContinuarSenha();
}); 

   
Then(/^deve ser apresentado senha alterada$/,async () => {
    await congigurarSenhaCartao.preencheCampoSenhaCartao(); 
    await congigurarSenhaCartao.clicarVoltarCartoes(); 
  }); 