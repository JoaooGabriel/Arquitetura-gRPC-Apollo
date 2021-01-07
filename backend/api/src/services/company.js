const load = require('../pb/loader');

const alphaCompany = load({
    serviceName: 'CompanyService',
    address: 'localhost:3334',
    fileName: 'alphaCompany',
}); 

  module.exports = alphaCompany;