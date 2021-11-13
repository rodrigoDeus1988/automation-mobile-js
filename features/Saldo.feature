#language: pt

@Saldo @Regressivo
Funcionalidade: Saldo - Conta Pagamento
  Como um usuário da aplicação
  Andre deseja consultar o saldo de sua conta Midway
  Para que ele saiba qual o valor disponível para futuras transações

  @ConsultaContaComSaldo
  Cenario: Consulta de saldo app midway de conta pagamento com saldo
    Dado que "André" possui uma conta pagamento com saldo
    E que ele está logado com sua conta midway
    Quando ele consulta o saldo disponível
    Entao o saldo disponível deve ser exibido

  @ConsultaContaSemSaldo
  Cenario: Consulta de saldo app midway de conta pagamento sem saldo
    Dado que "André" possui uma conta pagamento sem saldo
    E que ele está logado com sua conta midway
    Quando ele consulta o saldo disponível
    Entao o saldo disponível deve ser zero