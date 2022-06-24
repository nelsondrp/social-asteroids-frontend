var fs = require("fs");

module.exports = function(filename, successFunction, errorFunction){
    fs.readFile(filename, function(error, data){
        if(error)
            errorFunction(error);
        else
            successFunction(data);
    });
};