var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate').message;

module.exports = function() {
  var el = yo`<div class="container">
                <div class="col s10 push-s1">
                  <div class="row">
                    <div class="col m3">
                      <img src="IMAGENES/user.png" class="user">
                    </div>
                    <div class="col s12 m7 infoUser">
                      <span class="userName">Diego Velasco</span>
                      <a class="btnFollow waves-effect waves-light btn" href="#">Seguir</a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                  <div class="col s10 s4 l4">
                    <div class="contentProfile">
                      <img src="IMAGENES/office.jpg">
                      <div class="mask">
                  			<span><i class="fa fa-heart" arial-hidden="true"></i> 3</span>
                  		</div>
                    </div>
                  </div>
                </div>
              </div>`;

  return layout(el);
}
