var assert = require('assert');
var options = require('../../lib/config.js');

var config = require('../../config/config.default.json');

if(process.env.SERVER_ENV === 'CI'){
  options.store.adapter = 'mysql';
  options.store.mysql.host = 'localhost';
  options.store.mysql.user = 'root';
  options.store.mysql.database = 'jsbin';
} else {
  options.store.adapter = config.storeTest.adapter;
  options.store.mysql.host = config.storeTest.mysql.host;
  options.store.mysql.user = config.storeTest.mysql.user;
  options.store.mysql.password = config.storeTest.mysql.password;
  options.store.mysql.database = config.storeTest.mysql.database;
}

var store = require('../../lib/store.js')(options.store);

module.exports.assert = assert;
module.exports.store = store;
