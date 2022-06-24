process.title = "socialasteroids-webserver";
var args = process.argv;
var port  = args[2] || 3000;
var webServer = require("./server");

webServer.listen(port, function(){
    console.log("Server listening port " + port);
})

