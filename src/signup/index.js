var page = require('page');
var template = require('./template')
var title = require('title');

page('/signup', function(ctx, next) {
  title('Platzigram - Signup');
  var main = $('#main-container');
  $(main).empty();
  $(main).append(template);
});
