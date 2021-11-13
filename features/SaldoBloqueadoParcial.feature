#language: pt

@SaldoBloqueado @Regressivo
Funcionalidade: Conta Pagamento com Saldo Bloqueado Parcial
  Como um usuário da aplicação
  Antônio deseja consultar o saldo bloqueado parcial de sua conta Midway
  Para que ele saiba qual o valor disponível para futuras transações

  Contexto:
    Dado que "Antônio" possui uma conta pagamento com saldo parcialmente bloqueado
    E que ele está logado com sua conta midway

  @ConsultaSaldoBloqueado
  Cenario: Consulda de saldo bloqueado midway
    Quando ele acessa a opção para visualizar o extrato
    Então o saldo bloqueado deve ser exibido

  @VerDetalhesSaldoBloqueado
  Cenario: Ver detalhes do saldo bloqueado judicialmente
    Quando ele acessa a opção para visualizar o extrato
    Então ele deve ver mais informações sobre seu saldo bloqueado