const express = require('express');
const app = express();

// This serves static files from the specified directory
console.log(__dirname)
app.use(express.static(__dirname + './../client/build'));

const server = app.listen(8088, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});