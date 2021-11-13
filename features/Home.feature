#language: pt

@Home @Regressivo
Funcionalidade: Home da minha conta midway
  Como usuário do app Midway
  Rodrigo deseja fazer o login
  Para que ele possa acessar todos itens do carrossel e outros itens da home,Cartões,Outros e saldo.

  Contexto:
    Dado que "Rodrigo" possui uma conta pagamento com cartão riachuelo
    E que ele está logado com sua conta midway

  @HomeExtrato
  Cenario: Validar extrato home
    Quando ele aciona a opção Extrato
    Entao deve ser apresentado extrato da conta midway

  @HomeTransferencia
  Cenario: Validar home Transferência
    Quando ele aciona opção Transferência
    Entao deve ser apresentada Transferência de conta midway

  @HomeDepositoPorBoleto
  Cenario: Validar home Deposito por boleto
    Quando ele aciona opção Deposito por boleto
    Entao deve ser apresentada tela Deposito por boleto

  @AbaCartao
  Cenario: Validar cartão na home
    Quando ele aciona icone Cartão
    Entao deve ser apresentado cartão com sucesso

  @AbaOutros
  Cenario: Validar home de Outros
    Quando ele aciona icone Outros
    Entao deve ser apresentada tela Outros serviços

  @AbaChat
  Cenario: Validar home do Chat
    Quando ele aciona icone Chat
    Entao deve ser apresentada tela de Chat