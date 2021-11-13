#language: pt

@EsqueciMinhaSenha @Regressivo
Funcionalidade: Esqueci minha senha
  Como um usuario do App Midway
  Rodrigo esqueceu a senha e precisa alterar
  Para acessar novamente o app

  Contexto:
    Dado que "Rodrigo" possui uma conta pagamento
    E que ele acessou a tela de login do app midway

  @ValidarAlteracaoSenha @falhando
  Cenario: Validar alteração de senha
    E ele preencheu o campo cpf
    E ele acionou a opçao esqueci minha senha
    E ele passou pelo processo de biometria tirando uma foto
    Quando ele confirma após inserir a nova senha
    Então a senha deve ter sido alterada com sucesso