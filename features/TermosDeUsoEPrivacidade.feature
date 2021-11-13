#language: pt

@TermosEPrivacidade @Regressivo
Funcionalidade: Termos de Uso e Privacidade
  Como usuário do app Midway
  Fernando deseja poder ver os termos de uso e Privacidade
  Para que ele possa analisar se concorda com os mesmos e faça seu cadastro

  Contexto:
    Dado que "Fernando" aciona a opção para abrir conta Midway

  @ComoCuidamosDosSeusDados
  Cenario: Visualizar como cuidamos dos seus dados
    Quando ele aciona a opção como cuidamos dos seus dados
    Entao deverá ser apresentada uma modal com as informacoes de como cuidamos dos seus dados