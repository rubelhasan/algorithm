//box size
var box_size=[10,20,30,40,50,60,70];
// item size
var item_size=66;

bainary_search(box_size,item_size);
function match(box_size,start_index,end_index,item_match){

	var length=(end_index-start_index);
		// console.log("Item match: ",length,parseInt(length/2));
		if (length >=0){
			var mid=parseInt(length/2);
				mid=start_index+mid;
				if(box_size[mid]==item_match){
					console.log("Item match: ",item_match);
				}else if(box_size[mid] > item_match){
					  if(parseInt(length/2)==0){
					 	console.log('right condition',mid,length, box_size[mid])
					  }else{
		              	match(box_size,start_index,mid-1,item_match);
					  }
				}else{
					  if(parseInt(length/2)==0){
						console.log('left condition',mid, box_size[mid+1])
					  }else{
		             	 match(box_size,mid+1,end_index,item_match);
					  }
				}
		}else{
			console.log('Not found:',item_match);
		}	
}


function bainary_search(box_size,item_size){
	var start_index=0;
	var end_index=box_size.length-1;
	console.log("Box size: ","item_size:",item_size);
	match(box_size,start_index,end_index,item_size);

}