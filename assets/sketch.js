let dt;
let nt;

function setup() {
	createCanvas(500,288); // make an HTML canvas element width x height pixels

}
function preload(){
	dt= loadImage('img/daytime.jpg');
}

function draw() {
	x= hour();
	if(x > 6 && x < 18){
		background(dt);
	}else{
		background(225);
	}
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);

}

//text() output the string at the specified postion
//fill() fills all shapes drawn after with the specified color 
