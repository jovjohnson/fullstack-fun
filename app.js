'use strict';

const PORT = 3000;

var http = require('http');
var md5 = require('md5');
var moment = require('moment');

var server = http.createServer(function (request, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  // console.log('request:', request.url);
  // console.log('method:', request.method);

  var urlParts = request.url.match(/[^/]+/g);
  console.log(urlParts);

  if(urlParts) {
  	var path = urlParts.shift();
  	switch(path) {
  		
  		case 'gravatar':
  			var hash = md5(urlParts[0]);
  			var email = `http://www.gravatar.com/avatar/${hash}`;
  			res.write(email);
  			break;
  		
  		case 'sum':
	  		var sum = urlParts.reduce(function(sum, num) {
	  			return sum + parseInt(num);
	  		}, 0);
	  		res.write(sum.toString());
	  		break;

	  	case 'square':
	  		var num = parseInt(urlParts[0]);
	  		var sq = Math.pow(num, 2);
	  		res.write(sq.toString());
	  		break;
	  	
	  	case 'sentence':
	  		var sentence = decodeURI(request.url);
  			var stats = {};

  			stats.letterCount = sentence.match(/[a-z]/ig).length;   //every
  			stats.wordCount = sentence.split(' ').length;
  			stats.avgWordLength = stats.letterCount / stats.wordCount;

  			res.write(JSON.stringify(stats));
  			break;
  		
  		case 'birthday':
  			var month = urlParts[0];
  			var day = urlParts[1];
  			var year = urlParts[3];
	  }
  	
  	}  
	
	 res.end();

});

server.listen(PORT, function(err) {
	console.log('server listening on port 8000');

});