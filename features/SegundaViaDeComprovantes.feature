# language: pt
@SegundaViaDeComprovantes @Regressivo
Funcionalidade: Segunda via de comprovantes
  Como usuário do app Midway
  Jhonny deseja visualizar os comprovantes de sua conta
  Para que ele possa ver todos os comprovantes de pagamentos

  Contexto:
    Dado que "Jhonny" possui uma conta pagamento
    E que ele está logado com sua conta midway

  @ComprovantesEAgendamentos
  Cenario: Validar tela de segunda via de pagamentos
    Quando ele seleciona a opção de segunda via comprovantes
    Entao ele deve ver a tela de segunda via de comprovantes

  @SegundaViaComprovantes
  Cenario: Validar tela de segunda via de pagamentos
    E ele seleciona a opção de segunda via comprovantes
    Quando ele seleciona a opção de segunda via comprovantes na lista interna
    Entao ele deve ver a tela com a lista de segunda via de comprovantes

