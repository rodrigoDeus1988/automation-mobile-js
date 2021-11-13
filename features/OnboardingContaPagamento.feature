#language: pt

@OnboardingContaPagamento @ignore
Funcionalidade: Criação de conta pagamento
  Como um usuario do App Midway
  Pedro gostaria de criar uma conta
  Para que ele possa logar no app gerenciar sua conta, realizar pagamentos e outros

  @CriacaoContaPag
  Cenario: Validar a criação de conta pagamento
    Dado que "Pedro" aceitou os termos de uso após acionar a opção parar abrir conta midway
    E que ele preencheu todos os campos solicitados corretamente acionando a opção continuar quando necessário
    E após aceitar a permissão de Biometria Facial ele tirou corretamente uma foto
    E que ele informou corretamente o codigo de acesso (token) recebido por sms
    Quando ele cadastra uma nova senha corretamente
    Então a conta pagamento deve ser criada com sucesso