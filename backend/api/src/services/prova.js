const load = require('../pb/loader');

const alphaProva = load({
    serviceName: 'ProvaService',
    address: 'localhost:3334',
    fileName: 'alphaProva',
}); 

  module.exports = alphaProva;