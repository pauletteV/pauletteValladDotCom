
//declare vars 

var tl1; 
var tl2;
//var clickTag; 
//var clickTag1; 

var rockBG;
var specialistsLogo;
var lightWash;
var carBG;
	
var titleBar;
var fordTitle;
var parts;
var tools;
var techs; 

var djFrame;
var djSolo;
var djSoloCopy;

var endFrame;
var offerCopy1;
var offerCopy2;
var lineGrow;
var offerDetails1;
var offerDetails2;
/*var offerDetails3; */
var tireLogos;
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

	rockBG = document.getElementById('rockBG'); 
	specialistsLogo = document.getElementById('specialistsLogo'); 
	lightWash = document.getElementById('lightWash'); 
	carBG = document.getElementById('carBG'); 
	
	titleBar = document.getElementById('titleBar'); 
	fordTitle = document.getElementById('fordTitle'); 
	parts = document.getElementById('parts'); 
	tools = document.getElementById('tools'); 
	techs = document.getElementById('techs'); 

	djFrame = document.getElementById('djFrame'); 
	djSolo = document.getElementById('djSolo'); 
	djSoloCopy = document.getElementById('djSoloCopy'); 

	endFrame = document.getElementById('endFrame'); ;
	offerCopy1 = document.getElementById('offerCopy1'); 
	offerCopy2 = document.getElementById('offerCopy2'); 
	lineGrow = document.getElementById('lineGrow'); 
	offerDetails1 = document.getElementById('offerDetails1'); 
	offerDetails2 = document.getElementById('offerDetails2'); 
	/*offerDetails3 = document.getElementById('offerDetails3'); */
	tireLogos = document.getElementById('tireLogos'); 
	bottomBar = document.getElementById('bottomBar'); 
	fordOval = document.getElementById('fordOval'); 
    cta = document.getElementById('cta'); 
    ctaHover = document.getElementById('ctaOver');  
    bgClick = document.getElementById('bgClick');
 	
}

function runAnimation() {

	tl1.addLabel('into', 0);
	tl1.addLabel('BGtransition', '+=2.5');
	tl1.addLabel('servicePillars', '+=3.25');
	tl1.addLabel('djSolo', '+=8');
	tl1.addLabel('offer', '+=12');
	tl1.addLabel('cta', '+=12.5');

	tl1.set(specialistsLogo, {display: 'block'}, 'intro');
	tl1.from(specialistsLogo, .25, {scale: 3, x: -100, y:-10, opacity: 0, ease: Power2.easeIn }, 'into');
	tl1.to(specialistsLogo, .5, {rotation:0.01}, 'intro');//to remove bluring at scale
	tl1.set(specialistsLogo, {className:"-=unblur"}, 'intro+=.5'); //remove class for Safari -
	
	tl1.to(lightWash, .25, {opacity: 1, width: 157}, 'intro+=.75');
	tl1.to(lightWash, .5, {opacity: 0}, 'intro+=1');

	tl1.set(carBG, {display: 'block'}, 'BGtransition');
	tl1.set(titleBar, {display:'block'}, 'BGtransition'); 
	tl1.from(carBG, .5, {opacity: 0}, 'BGtransition+=.5');

	tl1.from(titleBar, .5, {opacity: 0}, 'servicePillars');

	tl1.set(fordTitle, {display: 'block'}, 'servicePillars');
	tl1.from(fordTitle, .5, {left: 80, opacity:0,  ease: Power2.easeOut}, 'servicePillars');
	tl1.set(parts, {display: 'block'}, 'servicePillars');
	tl1.from(parts, .5, {left: 140, opacity:0, ease: Power2.easeOut}, 'servicePillars'); 
	
	//service pillar animations
	tl1.set(tools, {display: 'block'}, 'servicePillars+=1');
	tl1.from(tools, .5, {width: 0, ease: Power4.easeIn}, 'servicePillars+=1');
	tl1.set(parts, {display: 'none'}, 'servicePillars+=1.1');

	tl1.set(techs, {display: 'block'}, 'servicePillars+=2');
	tl1.from(techs, .5, {width: 0, ease: Power4.easeIn}, 'servicePillars+=2');
	tl1.set(tools, {display: 'none'}, 'servicePillars+=2.1');

	//prep for dj solo frame
	tl1.to(techs, .75, {opacity: 0}, 'servicePillars+=4');
	tl1.to(titleBar, .75, {opacity: 0}, 'servicePillars+=4');
	tl1.to(fordTitle, .75, {opacity: 0}, 'servicePillars+=4');

	tl1.set(techs, {display: 'none'}, 'servicePillars+=4.25');
	tl1.set(titleBar, {display: 'none'}, 'servicePillars+=4.25');
	tl1.set(fordTitle, {display: 'none'}, 'servicePillars+=4.25');

	//dj solo frame 
	tl1.set(djFrame, {display: 'block'}, 'djSolo');
	tl1.set(djSolo, {display: 'block'}, 'djSolo');
	tl1.set(djSoloCopy, {display: 'block'}, 'djSolo');

	tl1.from(djSolo, .5, {opacity: 0}, 'djSolo');
	tl1.from(djSoloCopy, .5, {left: 400, ease: Power2.easeOut}, 'djSolo');

	tl1.to(djSolo, .75, {opacity: 0}, 'djSolo+=3');
	tl1.to(djSoloCopy, .75, {opacity: 0}, 'djSolo+=3');

	tl1.set(djFrame, {display: 'none'}, 'djSolo+=3.75');
	tl1.set(djSolo, {display: 'none'}, 'djSolo+=3.75');
	tl1.set(djSoloCopy, {display: 'none'}, 'djSolo+=3.75');

	//endframe
	tl1.set(endFrame, {display: 'block'}, 'offer');

	/*tl1.set(lineGrow, {display: 'block'}, 'offer'); 
	tl1.from(lineGrow, .25, {height: 1, top: 85}, 'offer');*/

	tl1.set(offerCopy1, {display: 'block'}, 'offer');
	tl1.from(offerCopy1, .25, {opacity: 0}, 'offer');

	tl1.set(offerCopy2, {display: 'block'}, 'offer+=.3');
	tl1.from(offerCopy2, .25, {opacity:0}, 'offer+=.3');
	
	tl1.set(offerDetails1, {display: 'block'}, 'offer+=.4');
	tl1.set(offerDetails2, {display: 'block'}, 'offer+=.4');
	/*tl1.set(offerDetails3, {display: 'block'}, 'offer+=.4');*/
	tl1.set(tireLogos, {display: 'block'}, 'offer+=.4');

	tl1.from(offerDetails1, .75, {left: -200, ease: Power2.easeOut}, 'offer+=.5');
	tl1.from(offerDetails2, .75, {left: 400, ease: Power2.easeOut}, 'offer+=.7');
	/*tl1.from(offerDetails3, .5, {left: -200, ease: Power2.easeOut}, 'offer+=.9'); */

	tl1.from(tireLogos, 1, {opacity: 0, ease: Power2.easeOut}, 'offer+=1');

	tl1.set(cta, {display: 'block'}, 'cta');
	tl1.from(cta, .5, {opacity: 0, top: 190}, 'cta');

}


function setListeners() {
	
	/*cta.addEventListener('click', function() {
		console.log("cta clicked"); 
		window.open(clickTag, "_blank");
	}); 

	bgClick.addEventListener('click', function() {
		console.log("bg clicked"); 
		window.open(clickTag1, "_blank");
	}); 
	*/
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