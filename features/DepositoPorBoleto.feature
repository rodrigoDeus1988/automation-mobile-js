# language: pt
@DepositoPorBoleto @Regressivo
Funcionalidade: Boleto Cash In - Conta Pagamento
  Como usuário do app Midway
  Karla deseja gerar um boleto a partir de sua conta
  Para que ela possa receber pagamentos e depositos de forma mais rápida e segura

  @DepositoPorBoletoCP
  Cenario: Validar Boleto Cash In - Conta Pagamento
    Dado que "Karla" possui uma conta pagamento para emissão de boleto
    E que ele está logado com sua conta midway
    E que ela seleciona a opção para depósito por boleto
    Quando ela informa o valor para o deposito
    Entao ela deve ver que o boleto foi gerado com sucesso

  @DepositoPorBoletoMinimoLimite
  Cenario: Validar Boleto Cash In - Conta Pagamento - valor mínimo por boleto
    Dado que "Karla" possui uma conta pagamento para emissão de boleto
    E que ele está logado com sua conta midway
    E que ela seleciona a opção para depósito por boleto
    Quando ela informa o valor mínimo permitido
    Entao ela deve ver que o boleto foi gerado com sucesso

  @DepositoPorBoletoMaximoLimite
  Cenario: Validar Boleto Cash In - Conta Pagamento - valor máximo por boleto
    Dado que "Karla" possui uma conta pagamento para emissão de boleto
    E que ele está logado com sua conta midway
    E que ela seleciona a opção para depósito por boleto
    Quando ela informa o valor máximo permitido
    Entao ela deve ver que o boleto foi gerado com sucesso

  @DepositoPorBoletoValorAbaixoDoLimite
  Cenario: Validar Boleto Cash In - Conta Pagamento - valor menor que o minimo permitido por boleto
    Dado que "Karla" possui uma conta pagamento para emissão de boleto
    E que ele está logado com sua conta midway
    E que ela seleciona a opção para depósito por boleto
    Quando ela informa o valor abaixo do permitido
    Entao ela deve ver qual o valor mínimo permitido por boleto

  @DepositoPorBoletoValorAcimaDoLimite
  Cenario: Validar Boleto Cash In - Conta Pagamento - valor maior que o máximo permitido por boleto
    Dado que "Karla" possui uma conta pagamento para emissão de boleto
    E que ele está logado com sua conta midway
    E que ela seleciona a opção para depósito por boleto
    Quando ela informa o valor acima do permitido
    Entao ela deve ver qual o valor máximo permitido por boleto

  @DepositoPorBoletoContaIrregular
  Cenario: Validar Boleto Cash In - Emissão de boleto abaixo de R%5.000,00 para cliente com conta irregular
    Dado que "Karla" possui uma conta pagamento em situação irregular para emissão de boleto
    E que ele está logado com sua conta midway
    E que ela seleciona a opção para depósito por boleto
    Quando ela informa o valor para o deposito
    Entao ela deve ver a mensagem para migração para conta sem limite de movimentação
