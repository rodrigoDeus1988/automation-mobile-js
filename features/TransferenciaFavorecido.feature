#language: pt
#TODO: Precisa ser priorizada a inclusão de um end point no motor de massa para criar massas com favorecido cadastrado, após a criação será possível adicionar novamente a tag Regressivo
@TransferênciaFavorecidos @ignore
Funcionalidade: Transferência para favorecido cadastrado
  Como usuário do app Midway
  Rodrigo deseja fazer transferência para favorecido cadastrado
  Para que ele possa transferir valores até 5 Mil reais

  Contexto:
    Dado que "Rodrigo" está logado na conta midway

  @TransfPrimeiroFavAtalhoHome
  Cenario: Validar Transferência a partir do atalho da home
    Quando ele aciona o primeiro favorecido do atalho home
    E informa valor de transferencia e identificacao para confirmar
    Entao transferência para favorecido efetuado com sucesso

  @TransfPrimeiroListaContatos
  Cenario: Validar Transferência a partir da lista de contatos
    Quando ele aciona a opção transferencia e escolhe o primeiro contato
    E informa valor de transferencia e identificacao para confirmar
    Entao transferência para favorecido efetuado com sucesso

  @TransfPrimeiroFavAtalhoListaContato
  Cenario: Validar Transferência a partir do atalho da lista de contatos
    Quando ele aciona a opção transferencia e escolhe o primeiro atalho
    E informa valor de transferencia e identificacao para confirmar
    Entao transferência para favorecido efetuado com sucesso