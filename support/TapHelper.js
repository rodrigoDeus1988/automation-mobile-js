const Helper = codecept_helper;

class TapHelper extends Helper {
  async tapById(elementId) {
    const target = await this.findById(elementId);
    this.waitForElement(target, 20);
    this.tap(target, 0, 0);
  }

  async tapByText(elementText) {
    const target = await this.findByText(elementText);
    this.waitForElement(target, 20);
    this.tap(target, 0, 0);
  }
}

module.exports = TapHelper;
