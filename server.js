var http= require('http')
var url = require("url")
// http.createServer(function(request,response){
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

// function onRequest(request,response){
//     console.log("Request received!")
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("Hello,World");
//     response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log("Server has started.")

function start(route,handler){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");
        var postData = "";
        // request.setEncoding("utf-8");
        route(handler,pathname,response,request);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.")
}

exports.start = start;



