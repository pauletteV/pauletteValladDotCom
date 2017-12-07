var mainTimeLine;

var tube;
var h1;
var h2;
var h3;
var materials;
var concrete;
var granite;
var glass;
var pvc;
var aluminum;
var clickarea; 
var button1;

function initBanner() {
	addVars();
	addListeners();
	startanimation();

}

function addVars() {

	mainTimeLine = new TimelineMax();
	tube = document.getElementById('tube');
	h1 = document.getElementById('h1');
	h2 = document.getElementById('h2');
	h3 = document.getElementById('h3');
	materials = document.getElementById('materials');
	concrete = document.getElementById('concrete');
	granite = document.getElementById('granite');
	glass = document.getElementById('glass');
	pvc = document.getElementById('pvc');
	aluminum = document.getElementById('aluminum');
	
	clickarea = document.getElementById('clickarea');
	button1 = document.getElementById('button1');
	
}

function addListeners(){
	//button1.addEventListener('click', ctaClick);
	//clickarea.addEventListener('click', bkgclick);

}

function startanimation() {

	mainTimeLine.addLabel("materials", "0");
	mainTimeLine.addLabel("copy", "8");
	mainTimeLine.addLabel("end", "12");
	
	mainTimeLine.to(tube, 1.25, {y: -190, ease: Power3.easeOut}, "materials+=.5");

	mainTimeLine.set([materials, edge, concrete, granite, glass, pvc, aluminum,cover], {display: 'block'},"materials+=1.5");
	mainTimeLine.to(edge, .25, {width:246, ease: Power1.easeOut}, "materials+=2"); 
	mainTimeLine.to(concrete, .25, {width:300, ease: Power1.easeOut}, "materials+=2");
	mainTimeLine.to(granite, .25, {width:300, ease: Power1.easeOut}, "materials+=3");
	mainTimeLine.to(glass, .25, {width:300, ease: Power1.easeOut}, "materials+=4");
	mainTimeLine.to(pvc, .25, {width:300, ease: Power1.easeOut}, "materials+=5");
	mainTimeLine.to(aluminum, .25, {width:300, ease: Power1.easeOut}, "materials+=6");
	mainTimeLine.set([concrete,granite,glass,pvc], {display:'none'}, "materials+=6.25");
	mainTimeLine.to(cover, .25, {width:300, ease: Power1.easeOut}, "materials+=7");
	mainTimeLine.set(edge, {display:'none'}, "materials+=7");
	mainTimeLine.set(aluminum, {display:'none'}, "materials+=7.25");
	
	mainTimeLine.to(tube, .5, {x: -90, y:-135, scale:.25, ease: Power1.easeOut, rotation: 0.01, force3D:false}, "copy");
	mainTimeLine.set(cover, {display: 'none'}, "copy");
	mainTimeLine.set(h1,{display:'block'},"copy+=.75");
	mainTimeLine.to(h1, .75, {scale:1, rotation: 0.01, force3D:false, opacity:1, ease: Elastic.easeOut.config(1,.4)}, "copy+=.75");
	mainTimeLine.to(h1, .5, {scale:2, rotation: 0.01, force3D:false, opacity:0, ease: Power1.easeOut}, "copy+=2.75");
	mainTimeLine.set(h2,{display:'block'},"copy+=3.5");
	mainTimeLine.to(h2, .75, {scale:1, rotation: 0.01, force3D:false, opacity:1, ease: Elastic.easeOut.config(1,.4)}, "copy+=3.5");
	
	mainTimeLine.set(button1, {display: 'block'}, "end+=.5");
	mainTimeLine.to(button1, .5,{x:-203, ease: Power1.easeOut}, "end+=1.5");
	
}	

function bkgclick(){
	console.log("bkg click");
	window.open(clickTag1, "_blank");
}

function ctaClick(){
	console.log("CTA click");
	window.open(clickTag, "_blank");
}




