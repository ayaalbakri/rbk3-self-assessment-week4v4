//Fill in vars here
var http= require('http'); 
// var data= [{username:'aya'}]
var fs= require('fs');
var url = require('url');

http.createServer(function (request, response) {
 var path = url.parse(request.url, true).pathname;
 console.log(path);
 if (request.method === 'POST') {
  if(request.url === "/highfive"){
    console.log("highfive");
  }
   /*========YOUR CODE HERE=========*/
   request.on('data' , function (chunk) {
   	/* body... */
   	data += chunk;
   	data.push(JSON.parse(data));
    response.end();

   })
 } else if (request.method === 'GET') {
   if(path === '/'){
     response.writeHead(200,{'Content-Type':'image'});
     fs.readFile(__dirname + '/index.html', function(err, data){
       if(err) console.log(err);
       response.end(JSON.stringify(data) );
     });
   }
 } else {
   response.end(404);
 }

}).listen(8080, '127.0.0.1');

console.log('Listening...');