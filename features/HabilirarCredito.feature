#language: pt

@CardTsysHabilitar 
Funcionalidade: Habilitar função crédito
  Como usuário do app Midway
  Rodrigo deseja fazer habiltar função crédito
  Para que ele possa realizar transações no cartão

  @bannerTaxasEncargos
  Esquema do Cenario: Validar Banner taxas e encargos 
    Dado que ele acessa a tela de login home habiltar <cpf> <senha>
    Quando ele aciona banner ativar função crédito
    Entao deve ser apresentado banner de taxas e encargos

    Exemplos:
      | cpf         | senha  |
      | 25866924897 | 102030 |


  @habiltarFuncaoCred 
  Esquema do Cenario: Habilitar Função Crédito
    Dado que ele acessa a tela de login home habiltar <cpf> <senha>
    Quando ele aciona banner ativar função crédito
    Entao deve ativar funcao credito com sucesso

    Exemplos:
      | cpf         | senha  |
      | 25866924897 | 102030 |
