//const express = require('express');
//const app = express();
//
//app.use(function (request, response){
//	response.writeHead(200, {'Content-Type': 'text/html'});
//	response.end('<h1>test</h1>');
//});
//
//app.listen(1133, function() {
//	console.log("Server Running");
//});
//

var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	if(request.method == 'GET') {
		fs.readFile('6-25.html', function(error, data){
			response.end(data);
		});
	} else if(request.method =='POST') {
		request.on('data', function(data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end('<h1>' + data + '</h1>');
		});
	}
}).listen(1144, function() {
	console.log("Server is running");
});