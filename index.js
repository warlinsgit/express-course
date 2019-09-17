// const http = require('http');
//
// http.createServer((req, res) =>{
//   res.end('Hello Warley');
// }).listen(5000);


//middlewares



const express = require('express');
const morgan = require('morgan');
const app = express();


//require routes
//const routes =
//
var routes = require('./routes.js');
const routesApi = require('./routes-api.js');

//settings
app.set('appName', 'My first server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares

app.use(morgan('dev'));

// routers

app.use(routes);
app.use('/api',routesApi);

app.listen(5000, (req, res) =>{
  console.log('server running on port 5000');
  console.log('app number:', app.get('appName'));
});
