var context;
var canvas;
var zoom = 1;

//HTML5canvas元素context
var floor = new Array(11);
//Floors
//floor[num] 为一个部门数组[区块A，区块B，区块C]
var color = ["white", 
			"rgba(255,20,20,1.0)",
			"rgba(109,157,84,1.0)",
			"rgba(255,255,121,1.0)",
			"rgba(121,172,255,1.0)",
			"rgba(0,255,255,1.0)"]
/*
color[0]:white --- 楼道
color[1]:red   --- 目的地
color[2]:green --- 会议室
color[3]:yellow	--- 办公区
color[4]:blue  --- 电梯
color[5]:cyan  --- 卫生间
*/
var initialized = new Array(12);
//判断是否以初始化


function init(){
	canvas = document.getElementById('mCanvas');
	if (canvas == null) return false;
	context = canvas.getContext("2d");
	for (var i =0; i<11; i++){
		floor[i] = [];
		initialized[i] = 0;
	}
	
	//initialte F5
	drawfloor(5); 
}

function createObject(color,x,y,width,height,name){
	var object = new Object();
	object.color = color;
	object.drawcommand=[x,y,width,height];
	object.name = name;
	object.zoom = 1;
	//object[0] represents color, reference on top
	return object;
}

function draw(obj){
	context.fillStyle = color[obj.color];
	context.fillRect(obj.drawcommand[0],obj.drawcommand[1],obj.drawcommand[2],obj.drawcommand[3]);
}


function drawfloor(num){
	context.clearRect(0,0,canvas.length,canvas.height);
	initF5();
	for (var i = 0; i <floor[num].length; i++){
		draw(floor[num][i]);
	};
	drawSample();

}

function drawSample(){
	context.fillStyle= color[5];
	context.fillRect(210,187,15,15);
	context.fillStyle= "rgba(30,30,30,1.0)";
	context.font = "15px 微软雅黑";
	context.fillText("卫生间",230,200);
	context.fillStyle= color[4];
	context.fillRect(300,187,15,15);
	context.fillStyle= "rgba(30,30,30,1.0)";
	context.font = "15px 微软雅黑";
	context.fillText("电梯",320,200);
	context.fillStyle= color[3];
	context.fillRect(210,222,15,15);
	context.fillStyle= "rgba(30,30,30,1.0)";
	context.font = "15px 微软雅黑";
	context.fillText("办公室",230,235);
	context.fillStyle= color[2];
	context.fillRect(300,222,15,15);
	context.fillStyle= "rgba(30,30,30,1.0)";
	context.font = "15px 微软雅黑";
	context.fillText("会议室",320,235);
}