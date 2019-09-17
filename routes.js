const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  ///res.send('<h1>amigo</h1>')
  res.render('index');
} );

router.get('/login', (req, res) => {
  //res.send('<h1>Login</h1>')

  res.render('login');
} );





module.exports = router;
