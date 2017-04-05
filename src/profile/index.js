var page = require('page');
var template = require('./template');
var title = require('title');
var header = require('../header');

page('/profile', header, function(ctx, next) {
  title('Platzigram - Profile');
  var main = $('#main-container');
  $(main).empty();
  $(main).append(template);
});
