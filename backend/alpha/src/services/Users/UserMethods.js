const path = require('path');

const thisService = "Users";

const fs = require('fs');

let methods = {}

fs.readdirSync(path.resolve() + '/src/services/' + thisService +'/implementation').forEach(file => {
    let value = require(path.resolve() + '/src/services/' + thisService +'/implementation/' + file);

    methods = {...methods, ...value}
}) //percorre a pasta e retorna todos os valores e metodos de dento do arquivo

module.exports = methods;