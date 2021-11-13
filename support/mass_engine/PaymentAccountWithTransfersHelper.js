const Helper = codecept_helper;

class PaymentAccountWithTransfersHelper extends Helper {
  async haveAPaymentAccountWithTransfers({ payload, fallback }) {
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    const paymentAccountData = await paymentAccountHelper.haveAPaymentAccount({
      payload,
      path: this.config.paymentAccountWithTransfersPath,
      fallback
    });
    return paymentAccountData;
  }

  async addTransfersToAccount({ payload }) {
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    const paymentAccountData = await paymentAccountHelper.haveAPaymentAccount({
      payload,
      path: this.config.addTransfersToAccountPath
    });
    return paymentAccountData;
  }

  async haveAPaymentAccountWithOutboundMovement({ balance = 1000, fallback } = {}) {
    const ymlHelper = this.helpers['YmlHelper'];
    const dateHelper = this.helpers['DateHelper'];
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    let paymentAccountData = null;
    const paymentAccountTransferDestiny = await paymentAccountHelper.haveAPaymentAccount({
      payload: { balance },
      fallback
    });

    if (paymentAccountTransferDestiny) {
      const { accountNumber } = paymentAccountTransferDestiny.account || { accountNumber: '' };
      const transfer = {
        balance: 1000,
        internalTransfers: {
          numberOfUndertakenTransfers: 1,
          destinationAccountNumber: accountNumber.toString(),
          amount: 1000
        }
      };
      paymentAccountData = await this.haveAPaymentAccountWithTransfers({
        payload: transfer,
        fallback
      });

      if (paymentAccountData) {
        const { startDate, endDate } = await dateHelper.getDatePeriod(new Date());
        paymentAccountData.account = { startDate, endDate };
      }
    }

    if ((!paymentAccountTransferDestiny || !paymentAccountData) && fallback) {
      paymentAccountData = {};
      const yml = await ymlHelper.readYml();
      const { documentNumber, password, startDate, endDate } = yml[fallback];
      paymentAccountData.customer = { documentNumber, password };
      paymentAccountData.account = { startDate, endDate };
    }

    return paymentAccountData;
  }

  async haveAPaymentAccountWithFutureMovement({ balance = 1000 } = {}) {
    const paymentAccountHelper = this.helpers['PaymentAccountHelper'];
    const paymentAccountTransferDestiny = await paymentAccountHelper.haveAPaymentAccount({
      payload: { balance }
    });

    const { accountNumber } = paymentAccountTransferDestiny.account || { accountNumber: '' };
    const transfer = {
      balance: 1000,
      internalTransfers: {
        numberOfScheduledTransfers: 1,
        destinationAccountNumber: accountNumber.toString(),
        amount: 1000
      }
    };
    const paymentAccountData = await this.haveAPaymentAccountWithTransfers({ payload: transfer });

    return paymentAccountData;
  }
}

module.exports = PaymentAccountWithTransfersHelper;
