var page = require('page');
var template = require('./template')
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');
var webcam = require('webcamjs');
var picture = require('../picture-card');

page('/', header, asyncLoad, function(ctx, next) {
  title('Platzigram');
  var main = $('#main-container');

  $(main).empty();
  $(main).append(template(ctx.pictures));

  const picturePreview = $('#picture-preview');
  const camaraInput = $('#camara-input');
  const cancelPicture = $('#cancelPicture');
  const shootButton = $('#shoot');
  const uploadButton = $('#uploadButton');

  function reset(){
    picturePreview.addClass('hide');
    cancelPicture.addClass('hide');
    uploadButton.addClass('hide');
    shootButton.removeClass('hide');
    camaraInput.removeClass('hide');
  }

  cancelPicture.click(reset);

  $('#modalCamara').modal({
    ready: function(){
      webcam.attach('#camara-input');
      shootButton.click((ev) => {
        webcam.snap((data_url) => {
          picturePreview.html(`<img src="${data_url}"/>`)
          picturePreview.removeClass('hide');
          cancelPicture.removeClass('hide');
          uploadButton.removeClass('hide');
          shootButton.addClass('hide');
          camaraInput.addClass('hide');

          uploadButton.off('click');

          uploadButton.click(() => {
            const pic = {
              'user': {
                'username': 'davelasco',
                'avatar': 'IMAGENES/office.jpg'
              },
              'url': data_url,
              'likes': 0,
              'lided': false,
              'createdAt': +new Date()
            }

            $('#picture-cards').prepend(picture(pic));
            reset();
            $('#modalCamara').modal('close');

          })
        })
      })
    },
    complete: function(){
      webcam.reset();

      reset();
    }
  })
});
/*
//Forma 1 para realizar el cargue de la imagenes desde el servidor
function loadPictures(ctx, next){
  request
    .get('/api/pictures')
    .end(function (err, res){
      if(err){
        return console.log(err);
      }
      ctx.pictures = res.body;
      next();
    })
}

//Forma 2 para realizar el cargue de la imagenes desde el servidor
function loadPicturesAxios(ctx, next){
  axios
    .get('/api/pictures')
    .then(function (res){
      ctx.pictures = res.data;
      next();
    })
    .catch(function (err){
      console.log(err);
    })
}

//Forma 3 para realizar el cargue de la imagenes desde el servidor
function loadPicturesFetch(ctx, next){
  fetch('/api/pictures')
    .then(function (res) {
      return res.json();
    })
    .then(function (pictures) {
      ctx.pictures = pictures;
      next();
    })
    .catch(function (err){
      console.log(err);
    })
}
*/
//Forma 4 para realizar el cargue de la imagenes desde el servidor
async function asyncLoad(ctx, next){
  try{
    ctx.pictures = await fetch('/api/pictures').then(res => res.json());
    next();
  }catch(err){
    return console.log(err)
  }
}
