#language: pt

@HomeCartao @Regressivo
Funcionalidade: Validar home de cartão do app
  Como usuário do app Midway
  Marcos deseja fazer login
  Para navegar na home de cartão

  @VerLancamentosCartao
  Cenario: Visualizar lançamentos da home de cartão
    Dado que "Marcos" possui uma conta pagamento com cartão riachuelo
    E que ele está logado com sua conta midway
    E que ele acessou a opção cartões
    Quando visualizar a apresentação das informações na tela inicial
    Então ele poderá visualizar seus lançamentos na opção Ver lançamentos

  @VerFaturaCartao
  Cenario: Visualizar fatura da home de cartão
    Dado que "Marcos" possui uma conta pagamento com cartão riachuelo
    E que ele está logado com sua conta midway
    E que ele acessou a opção cartões
    Quando visualizar a apresentação das informações na tela inicial
    Então ele poderá visualizar sua fatura na opção Ver Fatura

  @ValidarHomeSemCartao
  Cenario: Visualizar a home de cartão sem possuir cartão
    Dado que "Marcos" possui uma conta pagamento sem cartão riachuelo
    E que ele está logado com sua conta midway
    Quando ele acessa a opção cartões
    Então validar a apresentação da tela mostrando que não possui cartão
