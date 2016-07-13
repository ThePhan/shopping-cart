
var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express();

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname)))

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
/* use "***" :"webpack-dev-server --inline --content-base "
  "script:" in package.josn to run webpack without node.server and " . --history-api-fallback" to
  save state when refresh page. bundle by use npm ***
*/

var PORT = process.env.PORT || 8088
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
