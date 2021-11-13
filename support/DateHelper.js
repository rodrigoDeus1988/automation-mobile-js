const moment = require('moment');
const Helper = codecept_helper;

class DateHelper extends Helper {
  async getFullMonth(month) {
    const months = new Array(
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    );
    return months[month];
  }

  async getDatePeriod(date) {
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    const endDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    ).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    const dates = { startDate, endDate };

    return dates;
  }

  async getDate(...args) {
    const place = 'pt-BR';
    const date = moment().locale(place);
    let qtd = 0;
    let parameter = '+D';
    let format = 'DD/MM/YYYY';

    if (args) {
      for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        if (/^\d+$/g.test(arg)) args[index] = parseInt(arg);
      }
    }

    if (typeof args[0] === 'string' && !args[1]) {
      // data('YYYY-MM-DD')
      format = args[0];
    } else if (typeof args[0] === 'number' && !args[1]) {
      // data(1)
      qtd = args[0];
    } else if (typeof args[0] === 'number' && typeof args[1] === 'string') {
      // data(1, '+Y')
      qtd = args[0];
      parameter = args[1];
    } else if (typeof args[0] === 'string' && typeof args[1] === 'number' && !args[2]) {
      // data('YYYY-MM-DD', 1)
      format = args[0];
      qtd = args[1];
    } else if (typeof args[0] === 'string' && typeof args[1] === 'number' && typeof args[2] === 'string') {
      // data('YYYY-MM-DD', 1, '+Y')
      format = args[0];
      qtd = args[1];
      parameter = args[2];
    }

    if (!qtd) return date.format(format);
    // add time
    if (parameter.toUpperCase().trim() === '+D') return date.add(qtd, 'days').format(format);
    if (parameter.toUpperCase().trim() === '+M') return date.add(qtd, 'months').format(format);
    if (parameter.toUpperCase().trim() === '+Y') return date.add(qtd, 'years').format(format);
    if (parameter.toLowerCase().trim() === '+hh' || parameter.toLowerCase().trim() === '+h' ||
        parameter.toLowerCase().trim() === '+H' || parameter.toLowerCase().trim() === '+HH') return date.add(qtd, 'hours').format(format);
    if (parameter.toLowerCase().trim() === '+mm') return date.add(qtd, 'minutes').format(format);
    if (parameter.toLowerCase().trim() === '+ss') return date.add(qtd, 'seconds').format(format);

    // subtract time
    if (parameter.toUpperCase().trim() === '-D') return date.subtract(qtd, 'days').format(format);
    if (parameter.toUpperCase().trim() === '-M') return date.subtract(qtd, 'months').format(format);
    if (parameter.toUpperCase().trim() === '-Y') return date.subtract(qtd, 'years').format(format);
    if (parameter.toLowerCase().trim() === '-hh' || parameter.toLowerCase().trim() === '-h' ||
        parameter.toLowerCase().trim() === '-H' || parameter.toLowerCase().trim() === '-HH') return date.subtract(qtd, 'hours').format(format);
    if (parameter.toLowerCase().trim() === '-mm') return date.subtract(qtd, 'minutes').format(format);
    if (parameter.toLowerCase().trim() === '-ss') return date.subtract(qtd, 'seconds').format(format);

    throw new Error(`Parâmetro Inválido: ${parameter.toUpperCase().trim()}`.red);
  }
}
module.exports = DateHelper;
