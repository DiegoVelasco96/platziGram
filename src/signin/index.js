var page = require('page');
var template = require('./template')
var title = require('title');

page('/signin', function(ctx, next) {
  title('Platzigram - Signin');
  var main = $('#main-container');
  $(main).empty();
  $(main).append(template);
});
