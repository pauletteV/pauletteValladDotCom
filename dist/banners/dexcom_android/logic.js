var mainTimeLine;
var clickarea; 
var w1; 
var w2; 
var w3; 
var w5; 

var t1; 
var t2; 
var t3; 

var button1;

function initBanner() {
	addVars();
	addListeners();
	startanimation();

}

function addVars() {

	mainTimeLine = new TimelineMax();
	clickarea = document.getElementById('clickarea');
	w1 = document.getElementById('w1');
	w2 = document.getElementById('w2');
	w3 = document.getElementById('w3');
	w5 = document.getElementById('w5');

	t1 = document.getElementById('t1');
	t2 = document.getElementById('t2');
	t3 = document.getElementById('t3');
	button1 = document.getElementById('button1');
	
}

function addListeners(){
	//button1.addEventListener('click', ctaClick);
	//clickarea.addEventListener('click', bkgclick);

}
function bkgclick(){
	console.log("bkg click");
	window.open(clickTag1, "_blank");
	//mainTimeLine.pause();
}

function ctaClick(){
	console.log("CTA click");
	window.open(clickTag, "_blank");
}

function startanimation() {
	
	container.style.display="block";
	mainTimeLine.addLabel("frame1", "+=.5");
	mainTimeLine.addLabel("frame2", "+=4");
	mainTimeLine.addLabel("frame3", "+=7.25");//7.5
	mainTimeLine.addLabel("end", "+=13.75"); //14
	

	mainTimeLine.to([h1,h1Over], .75, {opacity:1, ease:Power4.easeOut}, "frame1");	
	mainTimeLine.to(h1Over, .25, {scale: 1.15,rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame1+=1.25");	
	mainTimeLine.to(h1Glow, .25, {display:"block", opacity:1, scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame1+=1.25");
	mainTimeLine.to([h1Over,h1Glow], .25, {scale: 1, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame1+=1.5");
	mainTimeLine.to(h1Glow, .25, {opacity: 0}, "frame1+=1.5");
	mainTimeLine.to(frame1, .5, {y:-251, ease:Power1.easeInOut},"frame1+=3");

	mainTimeLine.from(h2container, .5, {opacity:0, scale:.8, rotation: 0.01, force3D:false, ease:Power1.easeIn},"frame2");
		mainTimeLine.from([h2,h2Android], .5, {opacity:0,ease:Power1.easeIn},"frame2"); //for IE
	mainTimeLine.to(h2Android, .25, {scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame2+=1.5");	
	mainTimeLine.to(h2Glow, .25, {display:"block", opacity:1, scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame2+=1.5");
	mainTimeLine.to([h2Android,h2Glow], .25, {scale: 1, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame2+=1.75");
	mainTimeLine.to(h2Glow, .25, {opacity: 0}, "frame2+=1.75");
	mainTimeLine.to(disc1, .5, {top: 232, ease:Power1.easeIn},"frame2+=.25");
	
	mainTimeLine.to([frame2,h2,h2container,h2Android,h2Glow,disc1], .5,{opacity: 0,ease:Power4.easeOut}, "frame3");
	mainTimeLine.set([frame3_4,dotContainer],{display:'block'}, "frame3");
	mainTimeLine.from(h3container, .5, {opacity:0, scale:.8, rotation: 0.01,force3D:false, ease:Power1.easeIn},"frame3+=1");
		mainTimeLine.from([h3,h3Every], .5, {opacity:0,ease:Power1.easeIn},"frame3+=1"); //for IE
	mainTimeLine.to(h3Every, .25, {scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame3+=2.5");	
	mainTimeLine.to(h3Glow, .25, {display:"block", opacity:1, scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame3+=2.5");
	mainTimeLine.to([h3Every,h3Glow], .25, {scale: 1, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "frame3+=2.75");
	mainTimeLine.to(h3Glow, .25, {opacity: 0}, "frame3+=2.75");
	mainTimeLine.to([h3container, h3, h3Every,h3Glow], .5, {opacity:0,ease:Power1.easeIn},"frame3+=3.5");

	mainTimeLine.to(phone2, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.80");
	mainTimeLine.from(h4, .5, {opacity:0, scale:.8, rotation: 0.01, ease:Power1.easeIn},"frame3+=3.80");
	
	//dots
	mainTimeLine.to(dotContainer, 3.25, {x:-95, ease:Power2.easeIn}, "frame3+=.5");
	mainTimeLine.to(dot1, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=.5");
	mainTimeLine.to(dot2, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=.60");
	mainTimeLine.to(dot3, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=.70");
	mainTimeLine.to(dot4, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=.80");
	mainTimeLine.to(dot5, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=.90");
	mainTimeLine.to(dot6, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.00");
	mainTimeLine.to(dot7, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.10");
	mainTimeLine.to(dot8, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.20");
	mainTimeLine.to(dot9, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.30");
	mainTimeLine.to(dot10, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.40");
	mainTimeLine.to(dot11, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.50");
	mainTimeLine.to(dot12, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.60");
	mainTimeLine.to(dot13, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.70");
	mainTimeLine.to(dot14, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.80");
	mainTimeLine.to(dot15, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=1.90");
	mainTimeLine.to(dot16, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.00");
	mainTimeLine.to(dot17, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.10");
	mainTimeLine.to(dot18, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.20");
	mainTimeLine.to(dot19, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.30");
	mainTimeLine.to(dot20, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.40");
	mainTimeLine.to(dot20, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.50");
	mainTimeLine.to(dot21, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.60");
	mainTimeLine.to(dot22, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.70");
	mainTimeLine.to(dot23, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.80");
	mainTimeLine.to(dot24, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=2.90");
	mainTimeLine.to(dot25, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3");
	mainTimeLine.to(dot26, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.10");
	mainTimeLine.to(dot27, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.20");
	mainTimeLine.to(dot28, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.30");
	mainTimeLine.to(dot29, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.40");
	mainTimeLine.to(dot30, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.50");
	mainTimeLine.to(dot31, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.60");
	mainTimeLine.to(dot32, .10, {opacity:1, ease:Power2.easeIn}, "frame3+=3.70");
	mainTimeLine.to(circleGlow, .25, {opacity:1, scale:1.25,rotation: 0.01, force3D:false, ease:Power2.easeIn}, "frame3+=3.90");
	mainTimeLine.to(circleGlow, .10, {scale:1,rotation: 0.01, force3D:false, ease:Power2.easeIn}, "frame3+=4.15");
	
	mainTimeLine.set(endframe,{display:'block'},"end");

	//logo
	mainTimeLine.to(w1, .5, {opacity:1, ease:Power4.easeOut},"end+=.25"); //1.75
	mainTimeLine.to(w3, .5, {height:1, ease:Power4.easeOut},"end+=.75"); //2.25
	mainTimeLine.to(w2, .5, {y:20, ease:Power4.easeOut},"end+=.75"); //2.25
	mainTimeLine.to(w5, 1, {backgroundPosition:"-150px -38px", ease:Power4.easeOut},"end+=1"); //2.5

	mainTimeLine.from(t1Container, .75, {opacity:0, scale:.8, rotation: 0.01, ease:Power4.easeOut},"end+=.25"); //.75
		mainTimeLine.from([t1,t1Android], .5, {opacity:0,ease:Power1.easeIn},"end+=.25"); //for IE
	mainTimeLine.from(t2, .75, {opacity:0, scale:.8, rotation: 0.01, ease:Power4.easeOut},"end+=.50"); //1
	mainTimeLine.from(t3, .75, {opacity:0, scale:.8, rotation: 0.01, ease:Power4.easeOut},"end+=.75"); //1.25
	
	
	mainTimeLine.set(button1,{display:"block"},"end+=1.5"); //3
	mainTimeLine.to(button1, 1, {opacity:1, ease:Power4.easeOut},"end+=1.5"); //3

	mainTimeLine.to(t1Android, .25, {scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "end+=2");	
	mainTimeLine.to(endGlow, .25, {display:"block", opacity:1, scale: 1.15, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "end+=2");
	mainTimeLine.to([t1Android,endGlow], .25, {scale: 1, rotation: 0.01, force3D:false, ease:Power4.easeOut}, "end+=2.25");
	mainTimeLine.to(endGlow, .25, {opacity: 0}, "end+=2.25");

}	

