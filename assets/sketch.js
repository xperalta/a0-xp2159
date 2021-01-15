let dt;
let nt;


function setup() {

	createCanvas(800,400); // make an13 HTML canvas element width x height pixels
	d1= color(250, 134, 7);
	d2= color(255, 245, 123);
	n1= color(1, 22, 46);
	n2= color(1, 66, 109);

}


function draw() {
	hr= hour();
	mins=minute();
	seconds=second();
	
	if(hr > 6 && hr < 18){
		setGradient(d1,d2);
		fill(186,83,84);
		rect(18,20,hr*34,60,20);
		fill(196,119,103);
		rect(18,90,mins*13,30,20);
		console.log(mins);
		fill(215,181,144);
		rect(20,130,seconds*13,15,20);
	}else{
		setGradient(n1,n2);
		fill(72, 52, 117);
		rect(18,20,hr*34,60,20);
		fill(107, 73, 132);
		rect(20,140,mins*13,30,20);
		console.log(mins);
		fill(133, 89, 136);
		rect(20,200,seconds*13,15,20);
	}
		fill(255,223,0);
		circle(360,290,200);



	

	//if(temp= 25){
		//fill(186,83,84);
		//rect(18,50,hr*34,60,20);
	//}else{
	//	fill(72, 52, 117);
	//	rect(18,50,hr*34,60,20);
	//}

	

	//if(temp= 25){
	//	fill(196,119,103);
	//}else{
	//	
	//}

	
	
	//if(temp = 25){
	//	fill(215,181,144);
	//}else{
	//	
	//}

	

}

function setGradient(c1,c2){
	noFill();
	for(let y=0; y<height; y++){
		n = map(y,0,height,0,1);
		let newc = lerpColor(c1,c2,n);
		stroke(newc);
		line(0,y,width, y);
	  }
}







//text() output the string at the specified postion
//fill() fills all shapes drawn after with the specified color 
