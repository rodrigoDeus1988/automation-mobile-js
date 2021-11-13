#language: pt

@ConfSenhaCards @CardTsysSicc 
Funcionalidade: Configuração de senha
  Como usuário do app Midway
  Rodrigo deseja fazer Desbloquear senha do cartão
  Para que ele possa utilizar cartão

  @AlterarSenhaCartao
  Esquema do Cenario: Validar Alteração de senha do cartão
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clica opcao Configuracao de senha
    E seleciona alterar senha do cartao
    Entao deve ser apresentado senha alterada

    Exemplos:
      | cpf         | senha  |
      | 71506365000 | 102030 |

  @DesbloqueioSenhaCartao
  Esquema do Cenario: Validar Desbloquear senha cartão
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clica opcao Configuracao de senha
    E seleciona Desbloquear senha do cartao
    Entao deve ser apresentado senha desbloqueada

    Exemplos:
      | cpf         | senha  |
      | 71506365000 | 102030 |

 
