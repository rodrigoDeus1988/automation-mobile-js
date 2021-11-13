#language: pt

@CardTsysSicc @BloqueioCard
Funcionalidade: Bloqueio Definitivo / Bloqueio Temporário
  Como usuário do app Midway
  Rodrigo deseja fazer Bloqueio Definitivo do cartão de crédito
  Para que ele possa escolher motivo do Bloqueio

  @BloqueioDesbloqueioTempCancelar
  Esquema do Cenario: Cancelar Bloqueio temporário do cartão TSYS
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clica clicar Engrenagem
    E clica opcao bloqueio temporário
    Entao devera cancelar tentativa de bloqueio temporario

     Exemplos:
      | cpf         | senha  |
      | 71506365000 | 102030 |
    
  @BloqueioDesbloqueioTemporario
  Esquema do Cenario: Validar Bloqueio e Desbloqueio temporário do cartão TSYS 
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clica clicar Engrenagem
    E clica opcao bloqueio temporário
    E clica bloquear
    Entao deve ser apresentado seu cartao está bloqueado temporariamente
    E clica opcao bloqueio temporário
    E clica desbloquear
    Entao deve ser apresentado como desbloqueado

    Exemplos:
      | cpf         | senha  |
      | 71506365000 | 102030 |

  #@BloqueioDefinitivo 
  #Esquema do Cenario: Validar Bloqueio Definitivo 
  #  Dado que ele acessa a tela de login cartoes <cpf> <senha>
  #  Quando ele aciona aba cartoes
  #  E clica clicar Engrenagem
  #  E clica opcao bloqueio Definitivo
  #  E seleciona motivo do bloqueio
  #  Entao deve ser apresentado seu cartao esta bloqueado

 # Exemplos:
 #     | cpf         | senha  |
 #     | 71506365000 | 102030 |