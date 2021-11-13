module.exports = {
  botoes: {
    btnEntrar: 'enterButton',
    btnContinuar: 'continueButton',
    btnComoCuidamosDosSeusDados: 'Como cuidamos dos seus dados',
    btnOk: 'okButton',
    btnEsqueciMinhaSenha: 'forgotPasswordButton',
    btnVoltar: 'backButton',
    btnCapturar: 'capture-button',
    btnEscolherSenha: 'choosePasswordButton',
    btnFazerLogin: 'Fazer Login',
    btnFechaModal: 'allowLaterButton'
  },

  campos: {
    campoCpf: 'cpfInput',
    campoSenha: 'passwordInput'
  },

  textos: {
    txtRedefinirSenha: 'Redefinir senha',
    txtMensagemRedefinirSenha:
      'Você precisa redefinir sua senha de acesso do aplicativo Midway fornecendo algumas informações.',
    txtEsqueciMinhaSenha: 'Esqueci minha senha',
    txtBotaoContinuar: 'Continuar',
    txtSeuDispositivoFoiAutorizado: 'Seu dispositivo',
    txtDicaSeguranca: 'Antes de criar sua senha do aplicativo...',
    txtNovaSenha: 'Nova senha',
    txtCrieUmaSenha: 'Crie uma nova senha para acessar o aplicativo:',
    txtRepitaASenha: 'Repita a senha que você acabou de digitar:',
    txtSenhaCriadaSucesso: 'Criada com sucesso!',
    txtBiometriaFacil: 'Biometria Facial',
    txtSenhaIncorreta(index) {
      return `Senha incorreta. Você tem ${index} tentativa`;
    },
    txtSucessoBiometria: 'O token foi ativado com sucesso!',
    txtMensagemCpfInvalido: 'CPF inválido',
  }
};
