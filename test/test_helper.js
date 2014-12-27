var assert = require("assert"),
    options = require("../lib/config.js");

// Database Settings
options.store.adapter = 'mysql';
options.store.mysql.host = '192.168.59.103';
options.store.mysql.user = 'root';
options.store.mysql.password = 'textcube';
options.store.mysql.database = 'jsbin_test';

var store = require('../lib/store.js')(options.store);

module.exports.assert = assert;
module.exports.store = store;
