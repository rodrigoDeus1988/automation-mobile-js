const { I } = inject();

module.exports = {
  textos: {
    txtExtrato: 'Extrato',
    txtTituloConta: 'screenTitleText',
    txtDatas: 'movementDate-*',
    txtSaldo: 'Saldo',
    txtSemMovimentacao: 'Nenhuma movimentação para exibir.'
  },

  abas: {
    abaTudo: 'allTab',
    abaEntradas: 'cTab',
    abaSaidas: 'dTab',
    abaFuturo: 'futureTab'
  },

  botoes: {
    btnFiltro: 'filterButton',
    btnFiltrar: 'filterButton',
    btnFecharFiltro: 'closeButton'
  },

  campos: {
    campoSaldoMovimentacao: 'movementAmount',
    campoDataMovimentacao: 'movementContainer',
    campoDataInicial: 'startDate',
    campoDataFinal: 'endDate',
    campoValorMovimentacao: 'statementItemAmount'
  }
};
