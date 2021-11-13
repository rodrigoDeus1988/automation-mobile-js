# language: pt

@Extrato @Regressivo
Funcionalidade: Extrato - Conta Pagamento
  Como um usuário da aplicação
  Pedro deseja visualizar o extrato de sua conta Midway
  Para que ele possa ter acesso ao seu histórico de transações realizadas

  @ConsultaExtratoSaida
  Cenário: Validar os lançamentos de saída na conta pagamento
    Dado que "Pedro" possui uma conta pagamento com movimentações de saída
    E que ele está logado com sua conta midway
    Quando ele visualiza os débitos de sua conta pagamento
    Então todas as informações exibidas devem ser de débito

  @ConsultaExtratoEntrada
  Cenário: Validar os lançamentos de entrada na conta pagamento
    Dado que "Pedro" possui uma conta pagamento com movimentações de entrada
    E que ele está logado com sua conta midway
    Quando ele visualiza os créditos de sua conta pagamento
    Então todas as informações exibidas devem ser de crédito

  @ConsultaExtratoFuturo @wip @Bug3623
  Cenário: Validar as informações do extrato de lançamentos futuros
    Dado que "Pedro" possui uma conta pagamento com movimentações futuras
    E que ele está logado com sua conta midway
    Quando ele visualiza os lançamentos futuros de sua conta pagamento
    Então devem ser exibidos os lançamentos futuros

  @FiltroDataSaida
  Cenário: Validar as informações do extrato de saída utilizando filtro por data
    Dado que "Pedro" possui uma conta pagamento com movimentações de saída
    E que ele está logado com sua conta midway
    E ele visualiza os débitos de sua conta pagamento
    Quando ele seleciona as datas para exibição
    Então todas as informações exibidas devem ser de débito

  @FiltroDataEntrada
  Cenário: Validar as informações do extrato de entrada utilizando filtro por data
    Dado que "Pedro" possui uma conta pagamento com movimentações de entrada
    E que ele está logado com sua conta midway
    E ele visualiza os créditos de sua conta pagamento
    Quando ele seleciona as datas para exibição
    Então todas as informações exibidas devem ser de crédito

  @FiltroDataLancamentosFuturos @wip @Bug3623
  Cenário: Validar as informações do extrato de lançamentos futuros utilizando filtro por data
    Dado que "Pedro" possui uma conta pagamento com movimentações futuras
    E que ele está logado com sua conta midway
    E ele visualiza os lançamentos futuros de sua conta pagamento
    Quando ele seleciona as datas para exibição
    Então devem ser exibidos os lançamentos futuros
