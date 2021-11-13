module.exports = {
  botoes: {
    btnHomeCartoes: 'btn-Cartões',
    btnVerLancamento: 'Ver lançamentos',

    btnVerFatura(month) {
      return `Invoice${month}Button`;
    },

    btnFaturaEmPdf: 'pdfInvoice*Button',
    bntVoltar: 'backButton',
    btnCarrocelFatura: 'creditCardInvoicesCarousel'
  },

  textos: {
    txtCartao: 'Limite disponível',
    txtFaturas: 'Faturas',
    txtMovimentacoes: 'Últimas movimentações',
    txtSemCartao:
      'Você ainda não tem um cartão de crédito contratado. Solicite o seu na loja Riachuelo mais próxima.'
  }
};
