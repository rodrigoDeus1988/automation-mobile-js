#language: pt

@TransferênciaContasMidway @Regressivo
Funcionalidade: Transferência entre contas midway - Conta Pagamento
  Como usuário do app Midway
  Juliano deseja fazer transferência entre contas midway
  Para que ele possa transferir valores até 5 Mil reais

  Contexto:
    Dado que "Juliano" possui uma conta pagamento para transferência para contas midway
    E que ele está logado com sua conta midway

  @TransfMidwayCP
  Cenario: Validar Transferência entre contas midway
    Quando ele aciona a opção transferencia
    E informa valor de transferencia para contas midway
    Entao transferência entre contas midway efetuado com sucesso

  @TransfMidwayCPAgendamento
  Cenario: Validar Transferência entre contas midway - agendamento
    Quando ele aciona a opção transferencia
    E informa valor de transferencia para contas midway e data para agendamento
    Entao transferência entre contas midway agendado com sucesso

  @TransfMidwayDadosIncorretos
  Cenario: Validar Transferência entre contas midway com dados incorretos
    Quando ele aciona a opção transferencia
    E informa dados incorretos
    Entao é exibido erro de conta inválida

  @TransfMidwayCPCadFavorecido
  Cenario: Validar Transferência entre contas midway cadastrando favorecido
    Quando ele aciona a opção transferencia
    E informa valor de transferencia para contas midway e cadastra favorecido
    Entao transferência entre contas midway efetuado com sucesso

  @TransfMidwayCPCadFavorecidoAgendamento
  Cenario: Validar Transferência entre contas midway cadastrando favorecido com agendamento
    Quando ele aciona a opção transferencia
    E informa valor de transferencia para contas midway, data para agendamento e cadastra favorecido
    Entao transferência entre contas midway agendado com sucesso
