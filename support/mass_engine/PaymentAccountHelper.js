const Helper = codecept_helper;

class PaymentAccountHelper extends Helper {
  async haveAPaymentAccount({ payload, fallback, path } = {}) {
    const restHelper = this.helpers['REST'];
    try {
      const response = await restHelper.sendPostRequest(
        path || this.config.paymentAccountPath,
        { 
          ...payload,
        },
      );

      if (!response || !(response.status === 200)) {
        if (!fallback)
          throw new Error(
            `Mass Engine '${this.config.paymentAccountPath}' endpoint has returned an error:  ${response.data.message}`
          );
        return undefined;
      } else {
        return response.data;
      }  
    } catch (error) {
      console.error(error.message, error.stack);
      if (!fallback) throw error;
    }
  }

  async haveAPaymentAccountWithBalance({ balance = 1000, fallback } = {}) {
    const ymlHelper = this.helpers['YmlHelper'];
    let paymentAccountData = await this.haveAPaymentAccount({ payload: { balance }, fallback });
    if (!paymentAccountData && fallback) {
      paymentAccountData = {};
      const yml = await ymlHelper.readYml();
      const { documentNumber, password, balance, accountNumber } = yml[fallback];
      paymentAccountData.customer = { documentNumber, password }; //fallback when the mass engine api is out of service for any reason
      paymentAccountData.account = { balance, accountNumber };
    }
    return paymentAccountData;
  }

  async haveAPaymentAccountWithoutBalance({ fallback } = {}) {
    const ymlHelper = this.helpers['YmlHelper'];
    let paymentAccountData = await this.haveAPaymentAccount({ fallback });
    if (!paymentAccountData && fallback) {
      paymentAccountData = {};
      const yml = await ymlHelper.readYml();
      const { documentNumber, password, balance } = yml.paymentAccountWithoutBalance;
      paymentAccountData.customer = { documentNumber, password }; //fallback when the mass engine api is out of service for any reason
      paymentAccountData.account = { balance };
    }
    return paymentAccountData;
  }

  async addBalanceToAccount({ payload }) {
    const paymentAccountData = await this.haveAPaymentAccount({
      payload,
      path: this.config.addBalanceToAccountPath
    });
    return paymentAccountData;
  }

  async haveAPaymentAccountWithIncommingMoviment({ balance = 1000, fallback } = {}) {
    const ymlHelper = this.helpers['YmlHelper'];
    const dateHelper = this.helpers['DateHelper'];
    let paymentAccountData = await this.haveAPaymentAccount({ payload: { balance }, fallback });
    let balanceAdded = false;

    if (paymentAccountData) {
      const { accountNumber } = paymentAccountData.account || { accountNumber: '' };
      const payload = { balance: 1000, accountNumber: accountNumber.toString() };

      balanceAdded = await this.addBalanceToAccount({ payload });
      balanceAdded = await this.addBalanceToAccount({ payload });
      balanceAdded = await this.addBalanceToAccount({ payload });
      balanceAdded = await this.addBalanceToAccount({ payload });

      const { startDate, endDate } = await dateHelper.getDatePeriod(new Date());
      paymentAccountData.account = { startDate, endDate };
    }

    if (!paymentAccountData && !balanceAdded && fallback) {
      paymentAccountData = {};
      const yml = await ymlHelper.readYml();
      const { documentNumber, password, startDate, endDate } = yml[fallback];
      paymentAccountData.customer = { documentNumber, password };
      paymentAccountData.account = { startDate, endDate };
    }

    return paymentAccountData;
  }

  async haveAPaymentAccountWithIrregularSituation({ balance = 1000 } = {}) {
    const paymentAccountWithTransfersHelper = this.helpers['PaymentAccountWithTransfersHelper'];
    const paymentAccountData = await this.haveAPaymentAccount({ payload: { balance } });
    const { accountNumber } = paymentAccountData.account || { accountNumber: '' };
    const payload = { balance: 1000, accountNumber: accountNumber.toString() };

    await this.addBalanceToAccount({ payload });
    await this.addBalanceToAccount({ payload });
    await this.addBalanceToAccount({ payload });
    await this.addBalanceToAccount({ payload });

    const internalTransfers = {
      numberOfUndertakenTransfers: 1,
      destinationAccountNumber: accountNumber.toString(),
      amount: 1000
    };
    const transfer = { balance: 1000, internalTransfers };
    await paymentAccountWithTransfersHelper.haveAPaymentAccountWithTransfers({ payload: transfer });

    return paymentAccountData;
  }

  async addDeviceToAccount({ accountNumber, deviceId, deviceName = 'Automation 2021' }) {
    const payload = { accountNumber: accountNumber.toString(), deviceId, deviceName };
    await this.haveAPaymentAccount({
      payload,
      path: this.config.addDeviceToAccountPath
    });
  }
}

module.exports = PaymentAccountHelper;
