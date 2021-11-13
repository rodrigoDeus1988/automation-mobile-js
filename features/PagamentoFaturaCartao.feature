#language: pt

@CardParcelamento @CardTsysSicc
Funcionalidade: Pagamento de Faturas do cartão TSYS/SICC
  Como usuário do app Midway
  Rodrigo deseja fazer parcelamento do cartão de crédito
  Para que ele possa efetuar pagamento de forma parcelada referente aos seus cartões

  @ParcelamentoCarTsys
  Esquema do Cenario: Validar Parcelamento de Faturas do cartão TSYS
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clicar fatura Fechada
    E clicar pagar fatura
    E clicar parcelar fatura
    Entao deve ser apresentado processando o seu parcelamento

     Exemplos:
    | cpf         | senha  |
    | 04863361823 | 102030 |

  @PagTotalFatutaTsys
  Esquema do Cenario: Validar pagamento total para fatura TSYS
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clicar fatura Fechada
    E clicar pagar fatura
    E clicar pagar total
    E clicar copiar código
    Entao o código de barra foi copiado com sucesso.

     Exemplos:
    | cpf         | senha  |
    | 55774762084 | 102030 |

  @PagTotalFatutaSicc
  Esquema do Cenario: Validar pagamento total para fatura SICC
    Dado que ele acessa a tela de login cartoes <cpf> <senha>
    Quando ele aciona aba cartoes
    E clicar fatura Fechada
    E clicar pagar fatura
    E clicar pagar total
    E clicar copiar código
    Entao o código de barra foi copiado com sucesso.

     Exemplos:
    | cpf         | senha  |
    | 05391681812 | 102030 |