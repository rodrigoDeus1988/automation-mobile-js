module.exports = {
  textos: {
    txtTermosCondicoesGerais: 'condições gerais',
    txtMeusContratos: 'Meus Contratos',
    txtEmAberto: 'Em aberto',
    txtValorContratado: 'Valor contratado:',
    txtParcelas: 'Parcelas:',
    txtLiquidado: 'Liquidado',
    txtVerDetalhes: 'Ver detalhes',
    txtSimulacaoPronta: 'Sua simulação está pronta!',
    txtValorTotalPagar: 'Valor total a pagar',
    txtParcelasSimulacao: 'Parcelas',
    txtCondicoesValidas: 'Condições válidas para data de hoje',
    txtDetalhamentoCet: 'Detalhamento do CET',
    txtContratar: 'Contratar',
    txtContratacaoSucesso: 'com sucesso!',
    txtContratacaoParcelas: '5x de',
    txtCompartilharContrato: 'Compartilhar contrato',
    txtConcluir: 'Concluir'
    },

  botoes: {
    btnEmprestimo: 'loanCard',
    btnEmprestimoPessoal: 'Empréstimo pessoal',
    btnTermosCondicoesGerais: 'Termos e condições gerais',
    btnSolicitarEmprestimoPessoal: 'Solicitar empréstimo pessoal',
    btnContinuar: 'Continuar',
    btnSelecione: 'Selecione',
    btnOK: 'OK',
    btnSelecionarData(data) {
      return `native.calendar.SELECT_DATE_SLOT-${data}`
    },
    btnSelecionarParcelas: 'Selecione',
    btnParcelas: 'itemList-3',
    btnMeusContratos: 'Meus contratos',
    btnAbaPagos: 'Pagos',
    btnContratar: 'Contratar',
    btnLiEConcordo: 'Li e concordo',
    btnConcluir: 'Concluir'
  },

  campos:{
    campoValorSolicitado: 'text-field'
  }
};
