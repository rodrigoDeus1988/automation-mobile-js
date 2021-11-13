#language: pt

@Saldo @Regressivo
Funcionalidade: Pagamento - Pagar boleto
  Como um usuário da aplicação
  Jhonny deseja pagar o boleto utilizando sua conta midway
  Para que ele possa efetuar os pagamentos dos seus boletos

  @PagarBoletoValido
  Cenario: Pagar Boleto válido com saldo da conta
    Dado que "Jhonny" possui uma conta pagamento com saldo
    E que ele está logado com sua conta midway
    E que ele seleciona a opção para pagamento de boleto
    Quando ele pagar um boleto com o saldo disponível
    Entao a tela de comprovante de pagamento deve ser exibida

  @PagarBoletoInvalido
  Cenario: Pagar Boleto inválido com saldo da conta
    Dado que "Jhonny" possui uma conta pagamento com saldo
    E que ele está logado com sua conta midway
    E que ele seleciona a opção para pagamento de boleto
    Quando ele pagar um boleto invalido com o saldo disponível
    Entao a tela de comprovante de pagamento não deve ser exibida

  @AgendarPagamentoBoletoValido
  Cenario: Pagar Boleto válido com saldo da conta
    Dado que "Jhonny" possui uma conta pagamento com saldo
    E que ele está logado com sua conta midway
    E que ele seleciona a opção para pagamento de boleto
    Quando ele agendar o pagamento de um boleto válido
    Entao a tela de comprovante de agendamento deve ser exibida

  @AgendarPagamentoBoletoInválido
  Cenario: Pagar Boleto inválido com saldo da conta
    Dado que "Jhonny" possui uma conta pagamento com saldo
    E que ele está logado com sua conta midway
    E que ele seleciona a opção para pagamento de boleto
    Quando ele agendar o pagamento de um boleto inválido
    Entao a tela de comprovante de agendamento não deve ser exibida

