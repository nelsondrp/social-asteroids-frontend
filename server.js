var http = require("http");
var parse = require("url").parse;
var config = require("./config");
var fileHandler = require("./filehandler");

var types = config.types;
var rootFolder = config.rootFolder;
var defaultIndex = config.defaultIndex;
var server = http.createServer();

module.exports = server;

server.on("request",onRequest);

function onRequest(request, response){
    var filename = parse(request.url).pathname;
    console.log(filename);
    console.log("-------")

    if(filename === '/'){
        filename = defaultIndex;
    }

    var fullPath = rootFolder + filename;
    var extension = filename.substring(filename.lastIndexOf(".") + 1);

    fileHandler(fullPath, function(data){
        response.writeHead(200, {
            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length
        });
        
        response.end(data);
    }, function(error){
        response.writeHead(404);
        response.end();
    });
}