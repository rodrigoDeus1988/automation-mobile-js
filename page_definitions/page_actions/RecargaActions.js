const { I } = inject();
const pageTopUp = require('../page_objects/recarga');
const pageHome = require('../page_objects/home/PageHome.js');

module.exports = {
  async createAPaymentAccountWithBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async clickTopUpCard() {
    const cardTopUpMobile = await I.findById(pageHome.carrossel.cardTopUpMobile);

    await I.scrollUntil({
      scrollLocator: await I.findById(pageHome.carrossel.cardExtrato),
      toElementLocator: cardTopUpMobile,
      direction: 'right'
    });

    I.waitForElement(cardTopUpMobile, 20);
    I.tap(cardTopUpMobile);
    I.waitForVisible(await I.findByText(pageTopUp.text.receiverTitle), 20);
  },

  async fillFormReceiver() {
    await this.chooseOperator();
    await this.fillDDD();
    await this.fillPhone();
    await this.chooseRechargeValue();
    await this.tapButton();
  },

  async chooseOperator() {
    I.waitForVisible(await I.findById(pageTopUp.ids.operator), 20);
    const operator = await I.findById(pageTopUp.ids.operator);
    I.waitForElement(operator, 20);
    I.tap(operator);
  },

  async fillDDD() {
    I.waitForVisible(await I.findById(pageTopUp.ids.ddd), 20);
    const ddd = await I.findById(pageTopUp.ids.ddd);
    I.waitForElement(ddd, 20);
    I.fillField(ddd, pageTopUp.value.ddd);
  },

  async fillPhone() {
    I.waitForVisible(await I.findById(pageTopUp.ids.phone), 20);
    const phone = await I.findById(pageTopUp.ids.phone);
    I.waitForElement(phone, 20);
    I.fillField(phone, pageTopUp.value.phone);
    await this.hideDeviceKeyboard();
  },

  async hideDeviceKeyboard() {
    const qualValor = await I.findByText(pageTopUp.text.receiverTitle);
    I.waitForVisible(qualValor, 20);
    I.tap(qualValor);
  },

  async chooseRechargeValue() {
    const valueField = await I.findById(pageTopUp.ids.value);
    I.tap(valueField);

    I.waitForVisible(await I.findByText(pageTopUp.text.rechargeValue), 20);
    const value = await I.findById(pageTopUp.ids.rechargeValue);
    I.waitForVisible(value, 20);
    I.tap(value);
  },

  async tapButton() {
    const button = await I.findById(pageTopUp.button.receiverContinue);
    I.waitForElement(button, 20);
    I.tap(button);
    I.waitForVisible(await I.findByText(pageTopUp.text.validationTitle), 20);
  },

  async confirmTopUp() {
    await this.successScreen();
    await this.receiptScreen();
  },

  async successScreen() {
    const button = await I.findById(pageTopUp.button.recharge);
    I.waitForElement(button, 20);
    I.tap(button);
    I.waitForVisible(await I.findByText(pageTopUp.text.startRequestTitle), 20);
  },

  async receiptScreen() {
    const button = await I.findById(pageTopUp.button.receipt);
    I.waitForElement(button, 20);
    I.tap(button);
    I.waitForVisible(await I.findByText(pageTopUp.text.receiptTitle), 20);
  },
};
