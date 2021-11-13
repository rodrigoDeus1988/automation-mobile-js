const { I } = inject();
const PageConfigurarSenhaCartao = require('../page_objects/cartoes/PageConfiguracaoSenhaCartao.js');
const { preencheCampoSenha } = require('./LoginActions.js');

module.exports = {

  async clicarConfigurarSenhaCartao() {
    const botaoConfSenha = await I.findById(PageConfigurarSenhaCartao.botoes.btnConfiguracaoSenha);
    I.waitForVisible(botaoConfSenha, 10); 
    I.tap(botaoConfSenha);  
  }, 

  async clicarDesbloqueioSenha() {
    const botaoDesbloqueioSenhaCard = await I.findByText(PageConfigurarSenhaCartao.textos.txtDesbloquearSenhaCartao);
    I.waitForElement(botaoDesbloqueioSenhaCard, 10);   
    I.tap(botaoDesbloqueioSenhaCard); 
  },

  async clicarContinuarSenha() {
    const botaoDesblocCont = await I.findById(PageConfigurarSenhaCartao.botoes.btnContinuar);
    I.waitForVisible(botaoDesblocCont, 10);  
    I.tap(botaoDesblocCont); 

  },

  async clicarVoltarCartoes() {
    const botaoVoltCard = await I.findById(PageConfigurarSenhaCartao.botoes.btnVoltarParaCartoes);
    I.waitForVisible(botaoVoltCard, 10); 
    I.tap(botaoVoltCard);  
    I.wait(10); 
  },

  async clicarAlterarSenhaCartao() {
    const botaoAlterarSenhaCard = await I.findByText(PageConfigurarSenhaCartao.textos.txtAlterarSenhaCartao);
    I.waitForElement(botaoAlterarSenhaCard, 10);   
    I.tap(botaoAlterarSenhaCard); 
  }, 

  async preencheCampoSenhaCartao() { 
    
    for (var i = 0; i < 2; i++) {
        
    const inputSenha1 = await I.findById(PageConfigurarSenhaCartao.input.inputPosicao0);
    I.waitForVisible(inputSenha1, 20);
    I.fillField(inputSenha1, '1');

    const inputSenha2 = await I.findById(PageConfigurarSenhaCartao.input.inputPosicao1);
    I.waitForVisible(inputSenha2, 20);
    I.fillField(inputSenha2, '0');

    const inputSenha3 = await I.findById(PageConfigurarSenhaCartao.input.inputPosicao2);
    I.waitForVisible(inputSenha3, 20);
    I.fillField(inputSenha3, '2');

    const inputSenha4 = await I.findById(PageConfigurarSenhaCartao.input.inputPosicao3);
    I.waitForVisible(inputSenha4, 20);
    I.fillField(inputSenha4, '0');

    const inputSenha5 = await I.findById(PageConfigurarSenhaCartao.input.inputPosicao4);
    I.waitForVisible(inputSenha5, 20);
    I.fillField(inputSenha5, '3');

    const inputSenha6 = await I.findById(PageConfigurarSenhaCartao.input.inputPosicao5);
    I.waitForVisible(inputSenha6, 20);
    I.fillField(inputSenha6, '0'); 
  
  }

  },

  
};