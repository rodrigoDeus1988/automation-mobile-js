const Helper = codecept_helper;

class PaymentAccountWithCardHelper extends Helper {
  async haveAPaymentAccountWithCard({
    cardType = 'none',
    riachueloCard = { hasInvoices: true },
    fallback
  } = {}) {
    const ymlHelper = this.helpers['YmlHelper'];
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    let paymentAccountData = await paymentAccountHelper.haveAPaymentAccount({
      payload: { cardType, riachueloCard },
      fallback,
      path: this.config.paymentAccountWithCardPath
    });
    if (!paymentAccountData && fallback) {
      paymentAccountData = {};
      const yml = await ymlHelper.readYml();
      const { documentNumber, password } = yml[fallback];
      paymentAccountData.customer = { documentNumber, password }; //fallback when the mass engine api is out of service for any reason
    }
    return paymentAccountData;
  }
}

module.exports = PaymentAccountWithCardHelper;
