const { I } = inject();
const loginActions = require('../../page_definitions/page_actions/LoginActions.js');
const onboardingActions = require('../../page_definitions/page_actions/OnboardingActions.js');

Given(/que el(?:e|a) acess(?:a|ou) a tela de login do app midway/, async () => {
  await loginActions.fechaTelaOnboarding();
  await loginActions.selecionaOpcaoLogar();
  await loginActions.clicarBotaoFecharModalPermissoes();
});

Given(/que "([^"]*)" está logad(?:a|o) na conta midway$/, async () => {
  const config = await I.readYmlWithName('dados');
  await loginActions.addDeviceToAccount(config.paymentAccount.accountNumber, `automation-${config.paymentAccount.DocumentNumber}`);
  await loginActions.fechaTelaOnboarding();
  await loginActions.selecionaOpcaoLogar();
  await loginActions.clicarBotaoFecharModalPermissoes();
  await loginActions.preencheCamposLogin({
    cpf: config.paymentAccount.documentNumber,
    senha: config.paymentAccount.password
  });
  await loginActions.selecionaOpcaoLogar();
  await loginActions.esperaHomeCarregar();
});

Given(/^que el(?:e|a) está logad(?:a|o) com sua conta midway$/, async () => {
  const paymentAccount = await I.readNoteWithKey('paymentAccount');
  const { documentNumber, password } = paymentAccount.customer;
  const { accountNumber } = paymentAccount.account;
  await loginActions.addDeviceToAccount(accountNumber, `automation-${documentNumber}`);
  await loginActions.fechaTelaOnboarding();
  await loginActions.selecionaOpcaoLogar();
  await loginActions.clicarBotaoFecharModalPermissoes();
  await loginActions.preencheCamposLogin({
    cpf: documentNumber,
    senha: password
  });
  await loginActions.selecionaOpcaoLogar();
  await loginActions.esperaHomeCarregar();
});

Given('que ele/ela preenche corretamente seus dados', async () => {
  const paymentAccount = await I.readNoteWithKey('paymentAccount');
  const { documentNumber, password } = paymentAccount.customer;
  const { accountNumber } = paymentAccount.account;
  await loginActions.addDeviceToAccount(accountNumber, `automation-${documentNumber}`);
  await loginActions.preencheCamposLogin({
    cpf: documentNumber,
    senha: password
  });
});

Given('que ele/ela preenche incorretamente seus dados', async () => {
  await loginActions.preencheCpfInvalido({
    cpf: '11111111111',
  });
});

Given(/^el(?:e|a) tenta acessar sua conta informando a senha incorreta 3 vezes$/, async () => {
  const paymentAccount = await I.readNoteWithKey('paymentAccount');
  const { documentNumber } = paymentAccount.customer;

  await loginActions.fechaTelaOnboarding();
  await loginActions.selecionaOpcaoLogar();
  await loginActions.clicarBotaoFecharModalPermissoes();
  await loginActions.preencheCampoCpf({ cpf: documentNumber });
  await loginActions.clicarBotaoContinuar();

  await loginActions.tentarLoginComSenhaErrada3Vezes();
  await loginActions.validarModalRedefinirSenha();
});

When(/^el(?:e|a) aciona a opção para entrar$/, async () => {
  await loginActions.selecionaOpcaoLogar();
});

Then(/^deve ser apresentada a home do app midway$/, async () => {
  await loginActions.esperaHomeCarregar();
  await loginActions.validaHomeCarregou();
});

Then(/^deverá ser apresentada uma modal para redefinição de senha$/, async () => {
  await loginActions.validarModalRedefinirSenha();
});

Then(/^deverá passar pelo fluxo de biometria$/, async () => {
  await loginActions.fazerBiometriaFacial();
  await loginActions.validarSucessoBiometria();
});

Then(/^deve ser apresentado o texto de cpf invalido$/, async () => {
  await loginActions.validaMensagemCpfInvalido();
});

//Passos feature Esqueci minha senha
Given(/^el(?:e|a) preencheu? o campo cpf$/, async () => {
  const paymentAccount = await I.readNoteWithKey('paymentAccount');
  const { documentNumber } = paymentAccount.customer;
  const { accountNumber } = paymentAccount.account;
  await loginActions.addDeviceToAccount(accountNumber, `automation-${documentNumber}`);
  await loginActions.preencheCampoCpf({ cpf: documentNumber });
  await loginActions.clicarBotaoContinuar();
});

Given(/^el(?:e|a) acion(?:a|ou) a opçao esqueci minha senha$/, async () => {
  await loginActions.clicarEsqueciMinhaSenha();
  await loginActions.clicarBotaoContinuar();
});

Given(/^el(?:e|a) pass(?:a|ou) pelo processo de biometria tirando uma foto$/, async () => {
  await loginActions.fazerBiometriaFacial();
});

When(/^el(?:e|a) confirma após inserir a nova senha$/, async () => {
  await loginActions.clicarEscolherSenha();
  await loginActions.clicarBotaoContinuar();
  await onboardingActions.aguardarTelaNovaSenha();
  const config = await I.readYml();
  await onboardingActions.preencherSenha(config.login.novaSenha.toString());
  await onboardingActions.aguardarTelaRepetirNovaSenha();
  await onboardingActions.preencherSenha(config.login.novaSenha.toString());
});

Then(/^a senha deve ter sido alterada com sucesso$/, async () => {
  await loginActions.validarSenhaAlterada();
  const config = await I.readYml();
  await loginActions.preencheCampoSenha({ senha: config.login.novaSenha.toString() });
  await loginActions.selecionaOpcaoLogar();
  await loginActions.esperaHomeCarregar();
});
