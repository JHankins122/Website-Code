




//Most of the work is done by the javascript below. 
//clock
var canvas = document.getElementById("canvas");
var context = canvas.getContext ("2d");
var radius = canvas.height / 2;
context.translate(radius, radius);
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(context, radius);
	drawNumbers(context, radius);
	drawTime(context, radius);
}
//creating the face
function drawFace(context, radius) {
	var grad;
	context.beginPath();
	context.arc(0, 0, radius, 0 , 2*Math.PI);
	context.fillStyle = "white";
	context.fill();
	
	grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
	grad.addColorStop(0, "#333");
	grad.addColorStop(0.5, "white");
	grad.addColorStop(1, "#333");
	context.strokeStyle = grad;
	context.lineWidth = radius*0.1;
	context.stroke();
	
	context.beginPath();
	context.arc(0, 0, radius * 0.1, 0 , 2*Math.PI);
	context.fillStyle = "#333";
	context.fill();
}
//creating the numbers
function drawNumbers(context, radius) {
	var angle;
	var number;
	context.font = radius * 0.15 + "px arial";
	context.textBaseline = "middle";
	context.textAlign = "center";
	
	
	for (number = 1; number < 13; number++) {
		angle = number * Math.PI / 6;
		context.rotate(angle);
		context.translate(0, -radius * 0.85);
		context.rotate(-angle);
		context.fillText(number.toString(), 0, 0);
		context.rotate(angle);
		context.translate(0, radius * 0.86);
		context.rotate(-angle);
	}
}	
	//setting the time 
	function drawTime(context, radius) {
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		
		hour = hour%12;
		hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
		drawHand(context, hour, radius*0.5, radius*0.07);
		
		minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
		drawHand(context, minute, radius*0.8, radius*0.07);
		
		second = (second*Math.PI/30);
		drawHand(context, second, radius*0.9, radius*0.02);
	}
	//creating and setting the hands
	function drawHand(context, pos, length, width) {
		context.beginPath();
		context.lineWidth = width;
		context.lineCap = "round";
		context.moveTo(0,0);
		context.rotate(pos);
		context.lineTo(0, -length);
		context.stroke();
		context.rotate(-pos);
	}