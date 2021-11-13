const Helper = codecept_helper;

class PaymentAccountWithBlockedBalanceHelper extends Helper {
  async haveAPaymentAccountWithBlockedBalance({ balance = 1000, blockValue = 100, fallback }) {
    const ymlHelper = this.helpers['YmlHelper'];
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    let paymentAccountData = await paymentAccountHelper.haveAPaymentAccount({
      payload: { balance, blockValue },
      fallback,
      path: this.config.accountWithBlockedBalancePath
    });
    if (!paymentAccountData && fallback) {
      paymentAccountData = {};
      const yml = await ymlHelper.readYml();
      const { documentNumber, password, balance, blockedBalanceResult } = yml[fallback];
      paymentAccountData.customer = { documentNumber, password }; //fallback when the mass engine api is out of service for any reason
      paymentAccountData.account = { balance, blockedBalanceResult };
    }
    return paymentAccountData;
  }
}

module.exports = PaymentAccountWithBlockedBalanceHelper;
