var express = require('express');
var app = express();
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now()+'.'+ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

app.set('view engine', 'pug');

app.use(express.static('public'));

/*
Pedir logueo
function restrict(req, res, next){
  if(req.user) return next();

  res.redirect('/signin');
}
*/

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Platzigram'
  });
})

app.get('/signup', function(req, res) {
  res.render('index', {
    title: 'Platzigram - Signup'
  });
})

app.get('/signin', function(req, res) {
  res.render('index', {
    title: 'Platzigram - Signin'
  });
})

app.get('/profile', function(req, res) {
  res.render('index', {
    title: 'Platzigram - Profile'
  });
})

app.get('/api/pictures', function(req, res, next){
  var pictures = [{
    'user': {
      'username': 'Hola',
      'avatar': 'IMAGENES/office.jpg'
    },
    'url': 'IMAGENES/office.jpg',
    'likes': 0,
    'lided': true,
    'createdAt': new Date().getTime()
  }, {
    'user': {
      'username': 'Hola',
      'avatar': 'IMAGENES/office.jpg'
    },
    'url': 'IMAGENES/office.jpg',
    'likes': 1,
    'lided': true,
    'createdAt': new Date().setDate(new Date().getDate() - 10)
  }];

  setTimeout(function(){
    res.send(pictures);
  }, 2000)
})

app.post('/api/pictures', function(req, res){
  upload(req, res, function (err){
    if(err){
      return res.send(500, "Error uploading file.");
    }
    res.send('File uploaded.');
  })
})

app.listen(3000, function(err) {
  if (err) {
    return console.log("Error"), process.exit(1);
  } else {
    console.log("Platzigram corriendo correctamente en el puerto 3000");
  }
})
