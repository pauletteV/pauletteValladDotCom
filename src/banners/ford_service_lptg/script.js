
//declare vars 

var tl1; 
var tl2;

var frame1;
var rock;
var copy1; 
//var copy2;

var endFrame;
var offerCopy1;
var offerCopy2;
var lineGrow;
var offerDetails1;
var offerDetails2;
var offerDetails3;
var tagline;
var bottomBar;
var fordOval;

var cta; 
var ctaHover;
var bgClick; 


function initBanner() {
	
	getVars();
	setListeners(); 
	runAnimation();
}

function getVars() {

	tl1 = new TimelineMax();

	frame1 = document.getElementById('frame1'); 
	rock = document.getElementById('rock');
	copy1 = document.getElementById('copy1');
	//copy2 = document.getElementById('copy2');

	endFrame = document.getElementById('endFrame'); ;
	offerCopy1 = document.getElementById('offerCopy1'); 
	offerCopy2 = document.getElementById('offerCopy2'); 
	lineGrow = document.getElementById('lineGrow'); 
	offerDetails1 = document.getElementById('offerDetails1'); 
	offerDetails2 = document.getElementById('offerDetails2'); 
	offerDetails3 = document.getElementById('offerDetails3'); 
	tagline = document.getElementById('tagline'); 
	bottomBar = document.getElementById('bottomBar'); 
	fordOval = document.getElementById('fordOval'); 
    cta = document.getElementById('cta'); 
    ctaHover = document.getElementById('ctaOver');  
    bgClick = document.getElementById('bgClick');
 	
}

function runAnimation() {

	tl1.addLabel('intro', '+=1.5');
	tl1.addLabel('fadeOff', '+=4.5'); //5.5
	tl1.addLabel('offer', '+=5.5'); //6.5
	tl1.addLabel('cta', '+=6.5'); //7.5

	tl1.to(rock, .3, {width:300, rotation:.01, left:0, top:0, ease: Power0.easeIn}, 'intro');
	tl1.to (copy1, .5, {display:'block', opacity:1}, '+=.5');
	//tl1.to (copy2, .5, {display:'block', opacity:1}, '+=1');

	
	//endframe
	tl1.to (copy1, .5, {display:'none', opacity:0}, 'fadeOff'); 
	//tl1.to (copy2, .5, {display:'none', opacity:0}, 'fadeOff'); 
	tl1.to (rock, .5, {opacity:0}, 'fadeOff')
	tl1.set(endFrame, {display: 'block'}, 'fadeOff');

	tl1.set(endFrame, {display: 'block'}, 'offer');

	tl1.set(lineGrow, {display: 'block'}, 'offer'); 
	tl1.from(lineGrow, .25, {width: 1, left: 150}, 'offer');

	tl1.set(offerCopy1, {display: 'block'}, 'offer');
	tl1.from(offerCopy1, .25, {opacity: 0}, 'offer');

	tl1.set(offerCopy2, {display: 'block'}, 'offer+=.3');
	tl1.from(offerCopy2, .25, {opacity:0}, 'offer+=.3');
	
	tl1.set(offerDetails1, {display: 'block'}, 'offer+=.4');
	tl1.set(offerDetails2, {display: 'block'}, 'offer+=.4');
	tl1.set(offerDetails3, {display: 'block'}, 'offer+=.4');
	tl1.set(tagline, {display: 'block'}, 'offer+=.4');

	tl1.from(offerDetails1, .75, {left: -200, ease: Power2.easeOut}, 'offer+=.5');
	tl1.from(offerDetails2, .75, {left: -200, ease: Power2.easeOut}, 'offer+=.7');
	tl1.from(offerDetails3, .75, {left: -200, ease: Power2.easeOut}, 'offer+=.9');

	tl1.from(tagline, .75, {left: 400, ease: Power2.easeOut}, 'offer+=.7');

	tl1.set(cta, {display: 'block'}, 'cta');
	tl1.from(cta, .5, {opacity: 0, top: 192}, 'cta');

	
}


function setListeners() {
	
	cta.addEventListener('click', function() {
		console.log("cta clicked"); 
		window.open(clickTag, "_blank");
	}); 

	bgClick.addEventListener('click', function() {
		console.log("bg clicked"); 
		window.open(clickTag1, "_blank");
	}); 
	
}


function ctaOver() {
	console.log('CTA Over'); 
	tl2 = new TimelineMax(); 
	tl2.to(ctaHover, .3, {opacity: 1}); 
}

function ctaOut(){
	console.log('CTA Out'); 
	tl2 = new TimelineMax(); 
	tl2.set(ctaHover, {opacity: 0}); 
}