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
	var sorted=sort.quickSort(data);
	console.log(sorted);
	 	// var bainary_search=search.bainarySearch(data,3);
	 	// var linear_search=search.linearSearch(data,30);

}









