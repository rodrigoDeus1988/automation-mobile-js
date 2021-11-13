const { I } = inject();
const pageOnboarding = require('../page_objects/onboarding/PageOnboarding.js');
const pageTermosDeUso = require('../page_objects/onboarding/PageTermosDeUso.js');
const pageBemVindoCPF = require('../page_objects/onboarding/PageBemVindoCPF.js');
const pageBemVindoNomeCompleto = require('../page_objects/onboarding/PageBemVindoNomeCompleto.js');
const pageDadosPessoais = require('../page_objects/onboarding/PageDadosPessoais.js');
const pageBiometriaFacial = require('../page_objects/onboarding/PageBiometriaFacial.js');
const cameraFragment = require('../page_fragments/Camera.js');

const notificacao = require('../page_fragments/PermissionModal.js');

const pageToken = require('../page_objects/onboarding/PageToken.js');
const pageSenha = require('../page_objects/onboarding/PageSenha.js');
const pageConfiabilidade = require('../page_objects/onboarding/PageConfiabilidade.js');
const PageAceitarContaSimples = require('../page_objects/onboarding/PageAceitarContaSimples.js');
const permissionModalActions = require('../page_actions/PermissionModalActions.js');

module.exports = {
  async abrirMinhaContaMidwayApp() {
    const txtSuaContaMidway = await I.findByText(pageOnboarding.textos.txtSuaContaMidway);
    I.waitForElement(txtSuaContaMidway, 20);
    I.grantAllPermissions();
    I.swipeDown(70, 50);
    const btnAbrirContaMidway = await I.findById(pageOnboarding.botoes.btnAbrirContaMidway);
    I.waitForElement(btnAbrirContaMidway, 20);
    I.tap(btnAbrirContaMidway, 0, 0);
  },

  async clicarBotaoEntrar() {
    const btnEntrar = await I.findById(pageTermosDeUso.botoes.btnEntrar);
    I.waitForElement(btnEntrar, 20);
    I.tap(btnEntrar, 0, 0);
  },

  async clicarBotaoVoltar() {
    const btnBack = await I.findById('backButton');
    I.waitForElement(btnBack, 20);
    I.tap(btnBack, 0, 0);
  },

  async clicarBotaoContinuar() {
    const btnContinuar = await I.findByText(pageOnboarding.textos.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar, 0, 0);
  },

  async preencherCPFEContinuar(value) {
    const cpfLabel = await I.findByText(pageBemVindoCPF.labels.labelCPF);
    I.waitForElement(cpfLabel, 20);
    const cpfInput = await I.findById(pageBemVindoCPF.campos.campoCPFid);
    I.waitForElement(cpfInput, 20);
    I.tap(cpfLabel, 0, 0);
    I.fillField(cpfInput, value);
    await this.clicarBotaoContinuar();
  },

  async preencherNomeEContinuar(value) {
    const nomeCompletoLabel = await I.findByText(pageBemVindoNomeCompleto.labels.labelNomeCompleto);
    I.waitForElement(nomeCompletoLabel, 20);
    const nomeCompletoInput = await I.findById(pageBemVindoNomeCompleto.campos.campoNomeCompletoId);
    I.waitForElement(nomeCompletoInput, 20);
    I.fillField(nomeCompletoInput, value);
    I.tap(nomeCompletoLabel, 0, 0);
    await this.clicarBotaoContinuar();
  },

  async preencherDadosPessoaisEContinuar(dados) {
    const campoComoQuerSerChamado = await I.findById(
      pageDadosPessoais.campos.campoComoQuerSerChamado
    );
    const campoCelular = await I.findById(pageDadosPessoais.campos.campoCelular);
    const campoEmail = await I.findById(pageDadosPessoais.campos.campoEmail);
    const campoDataNascimento = await I.findById(pageDadosPessoais.campos.campoDataNascimento);
    const pcdCheckbox = await I.findById(pageDadosPessoais.campos.pcdCheckbox);
    const nacionalidade = await I.findById(pageDadosPessoais.campos.nacionalidade);

    I.waitForElement(campoComoQuerSerChamado, 20);
    I.tap(campoComoQuerSerChamado, 0, 0);
    I.fillField(campoComoQuerSerChamado, dados.comoQueroSerChamado);

    // I.waitForElement(campoCelular, 20);
    I.tap(campoCelular, 0, 0);
    I.fillField(campoCelular, dados.celular);

    // I.waitForElement(campoEmail, 20);
    I.tap(campoEmail, 0, 0);
    I.fillField(campoEmail, dados.email);

    // I.waitForElement(campoDataNascimento, 20);
    I.tap(campoDataNascimento, 0, 0);
    I.fillField(campoDataNascimento, dados.dataNascimento);

    await I.swipeVertical(80, 20, 50, 1000);

    I.tap(pcdCheckbox, 0, 0);
    const pcdOption = await I.findById(pageDadosPessoais.campos.pcdOption);
    I.waitForElement(pcdOption, 20);
    I.tap(pcdOption, 0, 0);

    I.tap(nacionalidade, 0, 0);
    const nacionalidadeBR = await I.findById(pageDadosPessoais.campos.nacionalidadeBR);
    I.waitForElement(nacionalidadeBR, 20);
    I.tap(nacionalidadeBR, 0, 0);

    const btnContinuar = await I.findById(pageDadosPessoais.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar, 0, 0);
  },

  // Método ira passar por Biometria-facial
  async fazerBiometriaFacial() {
    const imagem = await I.findById(pageBiometriaFacial.imagens.imagem);
    I.waitForElement(imagem, 20);
    await I.swipeHorizontal(80, 20);
    await I.swipeHorizontal(80, 20);
    await I.swipeHorizontal(80, 20);
    await I.swipeHorizontal(80, 20);
    permissionModalActions.permitir();

    const btnContinuar = await I.findById(pageBiometriaFacial.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar, 0, 0);

    const btnTirarFoto = await I.findById(cameraFragment.botoes.btnTirarFoto);
    I.waitForElement(btnTirarFoto, 20);
    I.tap(btnTirarFoto, 0, 0);

    const btnContinuar2 = await I.findById(cameraFragment.botoes.btnContinuar);
    I.waitForElement(btnContinuar2, 20);
    I.tap(btnContinuar2, 0, 0);
    I.tapById();
  },

  //Método Token
  async preencherToken(token) {
    const tokenSplitted = token.split('');
    const token0 = await I.findById(pageToken.campos.token);
    const token1 = await I.findById(pageToken.campos.token1);
    const token2 = await I.findById(pageToken.campos.token2);
    const token3 = await I.findById(pageToken.campos.token3);
    const token4 = await I.findById(pageToken.campos.token4);
    const token5 = await I.findById(pageToken.campos.token5);
    I.waitForElement(pageToken.campos.token, 20);
    I.tap(token0, 0, 0);
    I.fillField(token0, tokenSplitted[0]);
    I.fillField(token1, tokenSplitted[1]);
    I.fillField(token2, tokenSplitted[2]);
    I.fillField(token3, tokenSplitted[3]);
    I.fillField(token4, tokenSplitted[4]);
    I.fillField(token5, tokenSplitted[5]);
  },

  async preencherSenha(senha) {
    const senhaSplitted = senha.split('');
    const senha0 = await I.findById(pageSenha.campos.senha(0));
    const senha1 = await I.findById(pageSenha.campos.senha(1));
    const senha2 = await I.findById(pageSenha.campos.senha(2));
    const senha3 = await I.findById(pageSenha.campos.senha(3));
    const senha4 = await I.findById(pageSenha.campos.senha(4));
    const senha5 = await I.findById(pageSenha.campos.senha(5));
    I.waitForElement(senha0, 10);
    I.tap(senha0, 0, 0);
    I.fillField(senha0, senhaSplitted[0]);
    I.fillField(senha1, senhaSplitted[1]);
    I.fillField(senha2, senhaSplitted[2]);
    I.fillField(senha3, senhaSplitted[3]);
    I.fillField(senha4, senhaSplitted[4]);
    I.fillField(senha5, senhaSplitted[5]);
  },

  async preencherSenhaNovamente(senha) {
    const repetirSenhaSplitted = senha.split('');
    const senha0 = await I.findById(pageRepetirSenha.campos.senha0);
    const senha1 = await I.findById(pageRepetirSenha.campos.senha1);
    const senha2 = await I.findById(pageRepetirSenha.campos.senha2);
    const senha3 = await I.findById(pageRepetirSenha.campos.senha3);
    const senha4 = await I.findById(pageRepetirSenha.campos.senha4);
    const senha5 = await I.findById(pageRepetirSenha.campos.senha5);
    I.waitForElement(pageRepetirSenha.campos.senha, 10);
    I.tap(senha0, 0, 0);
    I.fillField(senha0, repetirSenhaSplitted[0]);
    I.fillField(senha1, repetirSenhaSplitted[1]);
    I.fillField(senha2, repetirSenhaSplitted[2]);
    I.fillField(senha3, repetirSenhaSplitted[3]);
    I.fillField(senha4, repetirSenhaSplitted[4]);
    I.fillField(senha5, repetirSenhaSplitted[5]);
  },

  async aguardarTelaNovaSenha() {
    I.waitForVisible(
      await I.findByText(pageSenha.textos.txtCriarUmaNovaSenhaParaAcessarAplicativo),
      20
    );
  },

  async aguardarTelaRepetirNovaSenha() {
    I.waitForVisible(await I.findByText(pageSenha.textos.txtRepetirSenhaQueAcabouDeDigitar), 20);
  },

  async compartilharDadosEContinuar() {
    const compartilharComGrupo = await I.findById(
      pageConfiabilidade.campos.aceitoCompartilharDadosGrupoGuararapes
    );
    I.waitForElement(compartilharComGrupo, 10);
    I.tap(compartilharComGrupo, 0, 0);
    const compartilharComBancoMidway = await I.findById(
      pageConfiabilidade.campos.aceitoCompartilharDadosBancoMidway
    );
    I.tap(compartilharComBancoMidway, 0, 0);

    const btnContinuar = await I.findById(pageConfiabilidade.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar, 0, 0);
  },

  async clicarBotaoAceitarContaSimples() {
    const btnAceitaContaSimples = await I.findById(
      PageAceitarContaSimples.botoes.btnAceitaContaSimples
    );
    I.waitForElement(btnAceitaContaSimples, 10);
    I.tap(btnAceitaContaSimples, 0, 0);
  }
};
