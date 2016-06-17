$(document).ready(function(){
	$(".sb-button").click(function() {
		var searchStr = document.getElementById("sb-text").value;
		console.log(searchStr);
		var returnData;
		var json = searchStr;
		if ((searchStr=="杨征")||(searchStr=="陈龙")||(searchStr=="孙雄鹰")) json="SNS";
		search(json,5);
		// $.ajax({
		// 	url: 'test.php',
		// 	type: 'GET',
		// //	dataType: 'json',
		// 	data: {param1: searchStr},
		// 	error: function(json){
		// 		console.log("error");
		// 	},
		// 	success: function(json){
		// 		console.log(json);
		// 		search(json,5);
		// 	}
		// })

		
	});
});

function search(name,num){
	console.log(name,num,floor[num].length);
	drawfloor(num);
	for (var i = 0; i<floor[num].length; i++){
		if (floor[num][i].name==name){ 
			var tmpColor = floor[num][i].color;
			floor[num][i].color = 1;
			draw(floor[num][i]);
			floor[num][i].color = tmpColor;
			console.log(i);
		}
	}
}

