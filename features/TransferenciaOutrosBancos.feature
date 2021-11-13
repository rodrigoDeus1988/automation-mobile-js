#language: pt

@TransferênciaOutrosBancos @Regressivo
Funcionalidade: Transferência outros Bancos - Conta Pagamento
  Como usuário do app Midway
  Pedro deseja fazer transferência entre outros bancos
  Para que ele possa transferir valores até 5 Mil reais e para outras instituoções

  Contexto:
    Dado que "Pedro" possui uma conta pagamento para transferência para outros bancos
    E que ele está logado com sua conta midway

  @TransfMidwayOutrosBc
  Cenario: Validar Transferência para outros bancos
    Quando ele aciona a opção transferencia outros
    E informa valor de transferencia para outros bancos
    Entao transferência entre outros bancos efetuado com sucesso

  @TransfOutrosBancosAgendamento
  Cenario: Validar Transferência para outros bancos - agendamento
    Quando ele aciona a opção transferencia outros
    E informa valor de transferencia para outros bancos e data para agendamento
    Entao transferência entre outros bancos agendado com sucesso

  @TransfOutrosDadosIncorretos
  Cenario: Validar Transferência de Midway para outros bancos com dados incorretos
    Quando ele aciona a opção transferencia outros
    E informa os dados com cpf incorreto
    Entao é exibido erro CPF inválido

  @TransfMidwayOutrosBcCadFavorecido
  Cenario: Validar cadastro de favorecido ao realizar transferencia
    Quando ele aciona a opção transferencia outros
    E informa valor de transferencia para outros bancos e cadastra favorecido
    Entao transferência entre outros bancos efetuado com sucesso

  @TransfMidwayOutrosBcCadFavorecidoAgendamento
  Cenario: Validar cadastro de favorecido ao realizar transferencia - Agendamento
    Quando ele aciona a opção transferencia outros
    E informa valor de transferencia para outros bancos, cadastra favorecido e agenda
    Entao transferência entre outros bancos agendado com sucesso