const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('dist');

// 1st call for unredirected requests 
app.use(staticFileMiddleware);

// Support history api
// this is the HTTP request path not the path on disk
app.use(history({
  index: '/index.html'
}));

// 2nd call for redirected requests
app.use(staticFileMiddleware);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});