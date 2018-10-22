var express = require('express');
var router = express.Router();
var createError = require('http-errors');

const us = [
  {
    name: 'SoonPC',
    age: 17
  },
  {
    name: 'Mi-soon',
    age: 18
  }
]

router.get('/', function(req, res, nex) {
  console.log(req.query)
  console.log(req.body)
  res.send({users: us})
});

router.post('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'post ok'})
})

router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'put ok'})
})

router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'del ok'})
})

router.all('*', function(req, res, next) {
  next(createError(404, '페이지가 존재하지 않습니다.'));
});

module.exports = router;
