const yaml = require('js-yaml');
const fs = require('fs');

const Helper = codecept_helper;

class YmlHelper extends Helper {
  async readYmlWithName(nomeDoArquivo) {
    const fileContents = await fs.readFileSync(`./config/${nomeDoArquivo}.yml`, 'utf8');
    return yaml.safeLoad(fileContents);
  }

  async readYml() {
    return this.readYmlWithName('dados');
  }
}
module.exports = YmlHelper;
