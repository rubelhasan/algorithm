var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'example-data/small-data.csv');
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
   	    addData(data)
    }else{
        console.log(err);
    }
});
function addData(data){
	data=data.split("\n").map(Number);
	console.log(data)
}









