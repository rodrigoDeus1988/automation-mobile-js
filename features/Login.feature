#language: pt

@Login @Regressivo
Funcionalidade: Login do usuário midway
  Como usuário do app Midway
  Rodrigo deseja fazer o login
  Para que ele possa acessar sua conta

  Contexto:
    Dado que "Rodrigo" possui uma conta pagamento sem saldo

  @positivo @FazerLogin
  Cenario: Login valido
    E que ele acessa a tela de login do app midway
    E que ele preenche corretamente seus dados
    Quando ele aciona a opção para entrar
    Entao deve ser apresentada a home do app midway

  @negativo @FazerLoginIncorreto
  Cenario: Tentativa de acesso com senha invalida
    Quando ele tenta acessar sua conta informando a senha incorreta 3 vezes
    Entao deverá ser apresentada uma modal para redefinição de senha

  @negativo @FazerLoginCpfInvalido
  Cenario: Login invalido
    E que ele acessa a tela de login do app midway
    E que ele preenche incorretamente seus dados
    Entao deve ser apresentado o texto de cpf invalido
