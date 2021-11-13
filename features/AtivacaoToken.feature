#language: pt

@AtivacaoToken @Regressivo
Funcionalidade: Ativar token da minha conta midway
  Como usuário do app Midway
  Rodrigo deseja fazer o login
  Para que ele possa ativar corretamente o token e assim conseguir fazer transações.

  Contexto:
    Dado que "Rodrigo" possui uma conta pagamento sem saldo
    E que ele está logado com sua conta midway

  @AtivarToken
  Cenario: Realizar ativação do token
    Quando ele clica no botão de ativação do Token
    Entao deverá passar pelo fluxo de biometria