# language: pt

@ContaPremiada @Regressivo
Funcionalidade: Conta Premiada
  Como usuário do app Midway
  Anderson deseja acessar conta Premiada
  Para que ela possa consultar os números da sorte referente premio de 10 mil reais

  Contexto:
    Dado que "Anderson" possui uma conta pagamento com saldo
    E que ele está logado com sua conta midway

  @ContaPremiadaConsulta
  Cenario: Consultar conta-premiada
    E ele aciona icone Outros
    Quando ele aciona card conta premiada
    Entao deve ser apresentar seu numero da sorte