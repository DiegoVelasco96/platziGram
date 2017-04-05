require('babel-polyfill');
var page = require('page');

require('./homepage');
require('./profile');
require('./signup');
require('./signin');
require('./footer');

page();
