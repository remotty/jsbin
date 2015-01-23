var assert = require("assert"),
    options = require("../../lib/config.js");

// Database Settings
options.store.adapter = 'mysql';
options.store.mysql.host = 'localhost';
options.store.mysql.user = 'root';
options.store.mysql.database = 'jsbin';

// options.store.mysql.password = 'textcube';
// options.store.adapter = 'sqlite';
// options.store.sqlite.location = './test/server/test.sqlite3';

var store = require('../../lib/store.js')(options.store);

module.exports.assert = assert;
module.exports.store = store;
