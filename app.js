var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.send('Hello Node Express');
});

app.listen(9090);
console.log('Node Express Server running at localhost:9090');