var express = require('express');
var router = express.Router();

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//  --------------------------------


//  -------- ROUTER EXAMPLES --------

// router.get('/', function(req, res) {

  //  //  use send for building APIs
  // res.send({
  //   users: ['Will', 'Laura', 'Joe']
  //   });

  //  --------

  // //  user render to send responses
  // res.render('index', {
  //   title: 'Test App :D',
  //   age: 27
  //   });

//  --------

// router.get('/', function(req, res) {
//   console.log(req.query)  // logs query string params

router.get('/users/:id', function(req, res) {
  console.log(req.params);  // logs path params
  res.send(req.params.id, 200);
});

module.exports = router;
