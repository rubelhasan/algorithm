var fs = require('fs');
var path = require('path');
var search=require('./search/search');
var sort=require('./sort/sort');

var filePath = path.join(__dirname, 'example-data/small-data.csv');
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
   	    addData(data.split("\n").map(Number));
    }else{
        console.log(err);
    }
});
function addData(data){
	//var sorted=sort.bubbleSort(data);
	var data=search.bainarySearch(data,3);
	 console.log(data);
}









