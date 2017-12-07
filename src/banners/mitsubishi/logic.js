
//declare vars 

var tl1; //main TL

var h1_1;
var h1_2;
var h1_3;
var h1sub;
var fyol;

var cta;
var ctaHover;
var bgClick;
var discBtn;
var discPanel
var discCopy;




function initBanner() {
	
	getVars();
	setListeners(); 
	runAnimation();
}

function getVars() {

	tl1 = new TimelineMax();


	h1_1 = document.getElementById('h1_1'); 
	h1_2 = document.getElementById('h1_2'); 
	h1_3 = document.getElementById('h1_3'); 
	h1sub = document.getElementById('h1_sub'); 
	fyol = document.getElementById('fyol');

    cta = document.getElementById('cta'); 
    ctaHover = document.getElementById('cta_hover');  
    bgClick = document.getElementById('bgClick');

    discBtn = document.getElementById('discBtn');
    discPanel = document.getElementById('discPanel');
    discCopy = document.getElementById('discCopy');
	
}

function runAnimation() {

	tl1.addLabel('h1_fyol', '+=.5');
	tl1.addLabel('sub', '+=2');
	tl1.addLabel('end', '+=3');

	TweenLite.set(cta_hover,{display:"block", x:-25,y:-16});

	tl1.to(h1_1, 1.25, {width: 225, ease:Power1.easeInOut}, 'h1_fyol');
	tl1.to(h1_2, 1.25, {width: 225, ease:Power1.easeInOut}, 'h1_fyol+=.25');
	tl1.to(h1_3, 1.25, {width: 225, ease:Power1.easeInOut}, 'h1_fyol+=.5');
	
	tl1.to(fyol, 1.25, {top: 221, ease:Power1.easeInOut}, 'h1_fyol+=.25');

	tl1.to(h1sub, 1.25, {width: 200, ease:Power1.easeInOut}, 'sub');

	tl1.set([cta, discBtn], {display: 'block'}, 'end');
	tl1.to(cta, 1, {opacity:1, onComplete:hoverme}, 'end');
	tl1.to(discBtn, 1, {opacity:1, onComplete:hoverme}, 'end');
	
}


function setListeners() {
	
	/*cta.addEventListener('click', function() {
		console.log('cta clicked');
		window.open(clickTag, "_blank"); 
		
	}); 

	bgClick.addEventListener('click', function() {
		console.log('bg clicked');
		 window.open(clickTag, "_blank");
	
	}); */
  
	
	discBtn.addEventListener('mouseover', onDisclMouseOverHandler);
	discBtn.addEventListener('mouseout', onDisclMouseOutHandler);
	
}

function hoverme(){
  TweenLite.set(cta_hover, { x: -55, alpha: .4, rotation: 35 });
  TweenLite.to(cta_hover, 1, { x:200,  alpha: .2, rotation: 55, ease: Quad.easeInOut, overwrite: true });
}

function onDisclMouseOverHandler(e) {
  TweenLite.set(discPanel, { autoAlpha: 1 });
  console.log("legal show");
};

function onDisclMouseOutHandler(e) {
    TweenLite.set(discPanel, { autoAlpha: 0 });
    console.log("legal hide");
	
};



/*function ctaOver() {
	console.log('CTA Over'); 
	tl2 = new TimelineMax(); 
	tl2.to(ctaHover, .3, {opacity: 1}); 
}

function ctaOut(){
	console.log('CTA Out'); 
	tl2 = new TimelineMax(); 
	tl2.set(ctaHover, {opacity: 0}); 
}*/

/*function discOver() {
	console.log("legal show");

	discPanel.style.display = 'block';
	
}

function discOut() {
	console.log("legal hide");
	
	discPanel.style.display = 'none';
	
}*/