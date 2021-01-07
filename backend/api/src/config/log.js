const fs = require('fs');
const path = require('path');

const log = fs.createWriteStream(
    path.join(__dirname, '../logs', 'express.log'), { flags: 'a'}
);

module.exports = log;