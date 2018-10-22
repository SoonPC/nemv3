var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({msg: 'index', a: 1})
});

router.get('/hello', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send({ a:1 })
  res.send({msg: 'hello', a: 1})
});

// router.get('/user', function(req, res, next) {
//   res.send({msg: 'user-get', a: 1})
// });
// router.post('/user', function(req, res, next) {
//   res.send({msg: 'user-post', a: 1})
// });

router.use('/test', require('./test'))
router.use('/user', require('./user'))

router.all('*', function(req, res, next) {
  next(createError(404, '페이지가 존재하지 않습니다.'));
});

module.exports = router;
