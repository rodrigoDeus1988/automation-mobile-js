#language: pt

@Emprestimos
Funcionalidade: Contratar empréstimo pessoal
  Como usuária do app Midway
  Melissa deseja acessar a funcionalidade de empréstimos
  Para que ela possa contratar um empréstimo pessoal

  @ValidarSimulacaoEmprestimo
  Cenario: Validar Contratação do empréstimo pessoal
    Dado que "Melissa" possui uma conta pagamento com R$"500" de limite de crédito
    E que ela está logada com sua conta midway
    E ela aciona icone Outros
    Quando ela aciona a opção Empréstimos
    E ela aciona a opção Empréstimos pessoal
    E realiza uma simulação de empréstimos no valor de R$"200.00" em 5 parcelas com vencimento de "2" dias
    Entao o APP deve realizar a simulação com sucesso

  @ValidarContratacaoEmprestimo
  Cenario: Validar Contratação do empréstimo pessoal
    Dado que "Melissa" possui uma conta pagamento com R$"500" de limite de crédito
    E que ela está logada com sua conta midway
    E ela aciona icone Outros
    Quando ela aciona a opção Empréstimos
    E ela aciona a opção Empréstimos pessoal
    E realiza uma contratação de empréstimos no valor de R$"200.00" em 5 parcelas com vencimento de "2" dias
    Entao o APP deve realizar a contratação com sucesso

  @ValidarTermosCondicoesGerais
  Cenario: Validar Termos e condições gerais do empréstimo pessoal
    Dado que "Melissa" está logada na conta midway para consultar
    Quando ela aciona icone Outros
    E ela acessa os Termos e condições gerais de empréstimos
    Entao deve ser apresentados os termos e condições gerais dos empréstimos da sua conta midway

  @VisualizarMeusContratosEmAbertoSipf
  Cenario: Visualizar Meus Contratos
    Dado que "Melissa" possui uma conta pagamento com R$"500" de limite de crédito e contrato ativo
    E que ela está logada com sua conta midway
    Quando ela aciona icone Outros
    E ela aciona a opção Empréstimos
    E ela aciona a opção Empréstimos pessoal
    E ela acessa Meus Contratos
    Entao deve ser apresentados os contratos Sipf que estão em aberto com sucesso

  @VisualizarMeusContratosPagosTopaz
  Cenario: Visualizar Meus Contratos
    Dado que "Melissa" está logada na conta midway para consultar
    Quando ela aciona icone Outros
    E ela aciona a opção Empréstimos
    E ela aciona a opção Empréstimos pessoal
    E ela acessa Meus Contratos
    E seleciona a aba Pagos
    Entao deve ser apresentados os contratos Topaz que estão pagos com sucesso