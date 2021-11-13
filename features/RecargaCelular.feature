#language: pt

@RecargaCelular @Regressivo
Funcionalidade: Recarga de Celular - Conta Pagamento
  Como usuário do app Midway
  Juliano deseja fazer uma recarga no seu celular pré-pago

  Contexto:
    Dado que "Juliano" possui uma conta pagamento para recarregar seu celular
    E que ele está logado com sua conta midway

  @RecarregarCelular
  Cenario: Validar Fluxo de recarga
    Quando ele aciona a opção de recarga
    E preenche e confirma o formulário com os dados da operadora, ddd e telefone
    Entao a solicitação de recarga é realizada e o comprovante pode ser visualizado