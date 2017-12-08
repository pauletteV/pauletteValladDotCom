
//variables

var tl;
var tl2;
var tl3;
var lensflare; 
var mainAnimationCont;  
var truckContainer; 
var truckFrontWheel;
var truckBackWheel;
var whiteTruck;
var blueTruck; 
var mainAnicopy1;
var mainAnicopy2;
var endFrameBG;
var logo;
var f1_logo_animation;
var logo1;
var logo2;
var logo3;
var logo4;
var endFrameCopy; 
var TAWALogo;
var cta;  
var buttonHover;
var replayBtn;
var endFrameContainer;
var bgClick;
var endBgClick;    


function initBanner() {
	
	//console.log("init banner has been called");

	addVars(); 
	addListeners();
	startAnimation(); 

 }


function addVars() {

 	//console.log("addVars called");

 	tl = new TimelineMax();
	mainAnimationCont = document.getElementById('mainAnimation'); 
	truckContainer = document.getElementById('truck'); 
	truckFrontWheel = document.getElementById('frontWheel');
	truckBackWheel = document.getElementById('backWheel');
	whiteTruck = document.getElementById('truck2');
	blueTruck = document.getElementById('truck3'); 
	mainAnicopy1 = document.getElementById('copy1');
	mainAnicopy2 = document.getElementById('copy2'); 
	endFrameBG = document.getElementById('endframeTruckBG');
	logo = document.getElementById('logo');
	f1_logo_animation = document.getElementById('f1_logo_animation');
	logo1 = document.getElementById('logo1');
	logo2 = document.getElementById('logo2');
	logo3 = document.getElementById('logo3');
	logo4 = document.getElementById('logo4');
	endFrameCopy = document.getElementById('endCopy');
	TAWALogo = document.getElementById('endTAWALogo');
	cta = document.getElementById('cta');  
	buttonHover = document.getElementById('buttonHover'); 
	replayBtn = document.getElementById('replayBtn');
	endFrameContainer = document.getElementById('endFrame');
	bgClick = document.getElementById('bgClick');
	endBgClick = document.getElementById('endBgClick');
	
}


function startAnimation() {

	//console.log("start animation has been called");

	tl.set(truckContainer, {display:"block"}, 'truckDrive');
	tl.from(truckContainer, 1.75, {left:350, ease: Back.easeInOut.config(.25)}, 'truckDrive');
	tl.to(truckFrontWheel, 1.75, {rotation:-1080, ease: Back.easeInOut.config(.25)}, 'truckDrive');
	tl.to(truckBackWheel, 1.75, {rotation:-1080, ease: Back.easeInOut.config(.25)}, 'truckDrive');
	tl.to(mainAnicopy1, .5, {opacity:1}, '+=.5'); 
	tl.to(whiteTruck, .5, {opacity:1}, '+=1');
	tl.to(blueTruck, .5, {opacity:1}, '+=1');
	tl.to(mainAnicopy1, .5, {opacity:0}, '+=1');
	tl.to(mainAnicopy2, .5, {opacity:1},'+=.5');

	/*toggle all the end frame elements that are still causing an issue to display:block*/
	tl.set(endFrameContainer, {display:"block"}, 'endShow+=1.5');
	tl.set(endFrameCopy, {display:"block"}, 'endShow+=1.5');
	tl.set(TAWALogo, {display:"block"},'endShow+=1.5');
	tl.set(cta, {display:"block"},'endShow+=1.5');
	tl.set(replayBtn,{display:"block"},'endShow+=1.5');

	tl.to(endFrameBG, .5, {opacity:1}, 'endFadeIn+=1.5');
	tl.set(mainAnimationCont, {display:"none"}, 'endFadeIn+1.5');
	tl.set(logo, {display:"block"}, 'logoIn');
	tl.from(logo, .75, {top:-90}, 'logoIn');
	tl.to(endFrameCopy, 1, {opacity:1}, 'endStuff');
	tl.to(replayBtn, 1, {opacity:1}, 'endStuff');
	tl.to(TAWALogo, 1, {opacity:1}, 'endStuff');
	tl.to(cta, 1, {opacity:1}, 'endStuff');	
}


function ctaOver() {

	//console.log("cta Over called"); 
	tl2 = new TimelineMax(); 

	
	tl2.to(buttonHover, .4, {x:190, y:0}); 
}

function ctaOut() {

	//console.log("cta Out called"); 
	tl3 = new TimelineMax(); 

	
	tl3.set(buttonHover, {x:0, y:0}); 
}

function addListeners(){

	/*logo.addEventListener('click', function() {
		//console.log("Logo Exit Clicked"); 
		Enabler.exit('Logo');
	}); 

	cta.addEventListener('click', function() {
		//console.log("CTA Exit Clicked"); 
		Enabler.exit('CTA');
	}); 

	bgClick.addEventListener('click', function() {
		//console.log("BG mainAnimation Clicked");
		Enabler.exit('BG'); 
	});

	endBgClick.addEventListener('click', function() {
		//console.log("BG endFrame Clicked");
		Enabler.exit('BG'); 
	}); */

}

function lensFlare() {
  lensflare = new TimelineMax();

  //lensflare.seek('over');
  lensflare.to(logo1, .1, {opacity:1});
  lensflare.to(logo2, .1, {opacity:1});
  lensflare.to(logo3, .1, {opacity:1});
  lensflare.to(logo4, .1, {opacity:1});
  lensflare.to(f1_logo_animation, .2, {opacity:0});
  lensflare.to(logo1, 0, {opacity:0});
  lensflare.to(logo2, 0, {opacity:0});
  lensflare.to(logo3, 0, {opacity:0});
  lensflare.to(logo4, 0, {opacity:0});
  lensflare.to(f1_logo_animation, 0, {opacity:1});


}

function replayBanner() {

	//console.log('replay initiated'); 

	tl.restart();
	Enabler.counter('REPLAY',true);
}
