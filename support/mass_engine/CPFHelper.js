// eslint-disable-next-line no-undef, camelcase
const Helper = codecept_helper;
const faker = require('faker-br');

class CPFHelper extends Helper {
  async getADocumentNumberThatIsNotRegistered({ fallback = true } = {}) {
    const restHelper = this.helpers.REST;
    try {
      const response = await restHelper.sendGetRequest(this.config.documentNotRegisteredPath);

      if (!response || !(response.status === 200)) {
        if (!fallback)
          throw new Error(
            `Mass Engine '${this.config.documentNotRegisteredPath}' endpoint has returned an error: ${response.data.message}`
          );
        else return faker.br.cpf();
      }
      return response.data.cpf;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message, error.stack);
      if (!fallback) throw error;
    }
    return '';
  }
}

module.exports = CPFHelper;
