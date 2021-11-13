const { I } = inject();
const onboardingActions = require('../../page_definitions/page_actions/OnboardingActions.js');
const pageAceitarContaSimples = require('../../page_definitions/page_objects/onboarding/PageAceitarContaSimples.js');

Given(
  /que "([^"]*)" aceitou os termos de uso após acionar a opção parar abrir conta midway/,
  async _nome => {
    await onboardingActions.abrirMinhaContaMidwayApp();
    await onboardingActions.clicarBotaoEntrar();
  }
);

Given(
  /que el(?:e|a) preencheu todos os campos solicitados corretamente acionando a opção continuar quando necessário/,
  async () => {
    const cpf = await I.getADocumentNumberThatIsNotRegistered();
    await onboardingActions.preencherCPFEContinuar(cpf);
    await onboardingActions.preencherNomeEContinuar('Rodrigo Florindo de Deus');
    //TODO: na api document-not-registered devolver tambem os dados do usuario para preenchimento dos campos
    await onboardingActions.preencherDadosPessoaisEContinuar({
      comoQueroSerChamado: 'Rodrigo',
      celular: '11974262854',
      email: 'rodrigo.florindo@gmail.com',
      dataNascimento: '11121988'
    });
  }
);

Given('após aceitar a permissão de Biometria Facial ele tirou corretamente uma foto', async () => {
  await onboardingActions.fazerBiometriaFacial();
});

Given(/que ele informou corretamente o codigo de acesso \(token\) recebido por sms/, () => {
  onboardingActions.preencherToken('000000');
});

When('ele cadastra uma nova senha corretamente', () => {
  // Senha
  onboardingActions.preencherSenha('102230');

  // Repetir Senha
  onboardingActions.preencherSenhaNovamente('102230');

  // Confiabilidade
  onboardingActions.compartilharDadosEContinuar();
});

Then('a conta pagamento deve ser criada com sucesso', () => {
  onboardingActions.clicarBotaoAceitarContaSimples();
  I.see(pageAceitarContaSimples.textos.txtContaSimples);
});
