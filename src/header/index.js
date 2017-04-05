var yo = require('yo-yo');
var translate = require('../translate').message;

var el = yo`<nav class="header">
              <div class="nav-wrapper">
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6 offset-m1">
                      <a class="brand-logo platzigram " href="/">Platzigram</a>
                    </div>
                    <div class="col s2 m6 push-m8">
                      <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                        <i class="fa fa-user" arial-hidden="true"></i>
                      </a>
                      <ul id="drop-user" class="dropdown-content">
                        <li><a href="/profile">${translate('profile')}</a></li>
                        <li><a href="/signin">${translate('logout')}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>`;

module.exports = function header (ctx, next){
  var container = $('#header-container');
  $(container).empty();
  $(container).append(el);
  next();
}
