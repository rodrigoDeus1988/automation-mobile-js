#language: pt

@CardTsysSicc @CâmbioCards
Funcionalidade: Câmbio
  Como usuário do app Midway
  Rodrigo deseja consultar variação do dolar
  Para que ele possa utilizar cartão em compras internacionais

  @Câmbio
  Esquema do Cenario: Validar cotação diaria do dolar
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clica cotação diaria do dolar
    Entao deve ser apresentado cotacao do dia

    Exemplos:
      | cpf         | senha  |
      | 42813275336 | 102030 |
