const Helper = codecept_helper;

class PaymentAccountToClosureHelper extends Helper {
  async haveAPaymentAccountToClosure() {
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    const payload = { hasLimit: true, documentNumber: '03655728026' };
    let paymentAccountData = await paymentAccountHelper.haveAPaymentAccount({
      path: this.config.accountToClosurePath,
      payload
    });
    return paymentAccountData;
  }
}

module.exports = PaymentAccountToClosureHelper;
