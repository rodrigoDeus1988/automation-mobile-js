# language: pt
#TODO: Serviço da Topaz ainda não faz o encerramento da conta, após o encerramento estiver funcionando ajustar o passo do contexto para chamar o end point account-to-closure
@EncerramentoContaPagamento @Regressivo
Funcionalidade: Encerramento de Conta Pagamento
  Como um usuário do app Midway
  Pedro deseja encerrar sua Conta Pagamento
  Para que ela possa desvincular seus dados do aplicativo

  Contexto:
    Dado que "Murilo" possui uma conta pagamento no qual deseja encerrar
    E que ele está logado com sua conta midway

  @EncerraContaPagamento
  Cenario: Validar encerramento da conta pagamento
    E que ele acessa o perfil da conta
    E ele aciona a opção de encerrar conta
    Quando ele informa o motivo do encerramento
    Então a conta pagamento deve ser encerrada com sucesso
