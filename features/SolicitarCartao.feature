#language: pt

@SolicitarCartaoMidway @Regressivo
Funcionalidade: Solicitar cartão Midway
  Como um usuário da aplicação
  Andre deseja solicitar o cartão da Midway na home do app
  Para que ele tenha um cartão de débito Midway

  Contexto:
    Dado que "André" possui uma conta pagamento sem cartão de débito
    E que ele está logado com sua conta midway

  @SolicitarCartaoDebito
  Cenario: Solicitar cartão de débito Midway
  E acessar a opção solicitar cartão de débito Midway
  Quando clicar na opção aceito
  Entao seu cartão é solicitado com sucesso