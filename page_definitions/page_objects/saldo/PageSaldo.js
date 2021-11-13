const { I } = inject();

module.exports = {
  textos: {
    labelSaldo: 'Saldo disponível',
    txtTituloMensagemValorBloqueado: 'Valor bloqueado',
    txtMensagemValorBloqueadoDescricao:
      'Este valor foi bloqueado devido a uma determinação judicial, mas você pode continuar utilizando as demais funções da sua conta normalmente',
    txtMensagemValorBloqueadoInformacoes:
      'Para mais informações entre em contato com a nossa Central de Atendimento',
    txtSaldoBloqueado: 'Saldo bloqueado: R$'
  },

  campos: {
    campoValorSaldoBloqueado: 'statementBlockedBalance'
  }
};
