# language: pt
#TODO: Serviço da Topaz na tela de conta remunerada exibe valor do saldo atual diferente do saldo apresentado na home, este teste está validando se os dois são iguais e passará com sucesso quando esse problema for corrigido
@ContaRemunerada @Regressivo
Funcionalidade: Conta Remunerada
  Como usuário do app Midway
  Thiago deseja acessar Remuneração de conta
  Para que ela possa consultar Rendimento bruto no mes, Imposto de renda, IOF, Rendimento liquido

  Contexto:
    Dado que "Thiago" possui uma conta remunerada com saldo
    E que ele está logado com sua conta midway

  @ContaRemuneradaConsulta @falhando
  Cenario: Consultar Remuneração da conta
    E ele consulta o saldo atual
    E ele aciona icone Outros
    Quando ele aciona card conta remunerada
    Entao deve ser apresentar Rendimento bruto no mes, Imposto de renda, IOF, Rendimento liquido
