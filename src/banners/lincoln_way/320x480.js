//declare global vars
var tl1;
//var photo; 
var lineDecoration;
var horizLine;
var title;
var copy1;
var copy2;
var bkg;
var button;
var button_over;


function initCreative(){
	initVars();
	addListeners();

	//start timeline
	runAnimation();
}

function initVars() {

	tl1 = new TimelineMax();

	photo = document.getElementById('photo');
	lineDecoration = document.getElementById('line-decoration');
	horizLine = document.getElementById('horizontal-line');
	title = document.getElementById('title');
	copy1 = document.getElementById('copy1');
	copy2 = document.getElementById('copy2');
	bkg = document.getElementById('bg-clickout');
	button = document.getElementById('button');
	button_over = document.getElementById('button_over');

}
	
function runAnimation() {
	//need to redo labels & timing:

	tl1.addLabel('slideTitle', "0");
	tl1.addLabel('growLines', '+=1');
	tl1.addLabel('slideCopy', '+=2');

	//tl1.to(photo, 2, {opacity: 1, y: -10, ease: Power4.easeOut}, 'intro');

	tl1.to(title, 1, {top: 51, opacity:1, ease: Power4.easeOut}, 'slideTitle');

	tl1.set(horizLine, {display:'block'}, 'growLines');
	tl1.to(lineDecoration, .25, {opacity: 1, ease: Power2.easeOut}, 'growLines');
	tl1.from(horizLine, .75, {width: 1, left: 160, ease: Power3.easeOut}, 'growLines+=.25');

	tl1.to(copy1, 1, {top: 132, opacity:1, ease: Power4.easeOut}, 'slideCopy');
	tl1.to(copy2, 1, {top: 146,opacity:1, ease: Power4.easeOut}, 'slideCopy+=1.25');
		
}

function addListeners() {
	//comment out events not needed
	//bkg.addEventListener('click', bgClick);
	//button.addEventListener('click', ctaClick);
}

	/*function bgClick() { 
		//console.log("bg Woo");
		Enabler.exit("OpenSpaceClickOut_e");	 
	}
		 
	function ctaClick() { 
		//console.log("cta");
		Enabler.exit("MainCTA_e");	 
	}*/


function cta_hover_on() {
	button_over.style.opacity = "1";
}

function cta_hover_off() {
	button_over.style.opacity = "0";	
}