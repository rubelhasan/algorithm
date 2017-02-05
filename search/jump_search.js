function jumpSearch(arr,item){
	var length=8;
	var step=length;
	for(var i=0; i <= arr.length; i++){
		// console.log(i,arr.length);
		if(arr[length]==item){
			return arr[length]
		}else if(item < arr[length]){
			break;
		}else if(i==arr.length){
			return "not found";
		}else{
			length+=step;
		}
	}
	for(var j=length-step;j<=step+length;j++){
		 // console.log(j);
		if(arr[j]==item){
			return arr[j];
		}else if(j==step+length){
			return "not found";
		}	
	}
}


var search={
	action:function(arr,item){
		return jumpSearch(arr,item)
	}
}

module.exports=search