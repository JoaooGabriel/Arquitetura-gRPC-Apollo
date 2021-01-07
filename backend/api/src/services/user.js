const load = require('../pb/loader');


const alphaUser = load(
      {
        serviceName: 'UserService',
        address: 'localhost:3334',
        fileName: 'alphaUser',
});

module.exports = alphaUser ;

