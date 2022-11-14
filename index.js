var express = require('express');

var app = express();
app.get('/', function (req, res) {
	res.send('Simple Web Application is UP and away!');
});

app.get('/rodj', function (req, res) {
	let aa = new Date();
	res.send('Rodj says hello at ' + aa.toISOString());
});

app.listen(8081, function () {
	console.log('Simple Web Application running on port 8081!');
});
