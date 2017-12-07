

var clickTag;
var clickTag1;

var tl1; //main timeline
var tl2; //cta
var copy1;
var copy2;
var cta; 
var ctaHover; 
var backgroundClickOut;

function initBanner() {
	
	getVars();
	setListeners(); 
	runAnimation();
}

function getVars() {
	
	tl1 = new TimelineMax(); 
	copy1 = document.getElementById('copy1');
	copy2 = document.getElementById('copy2');
	cta = document.getElementById('cta');
	ctaHover = document.getElementById('ctaOver');
	backgroundClickOut = document.getElementById('BgClickOut');
}

function setListeners() {
	
	cta.addEventListener('click', function() {
		console.log("cta clicked"); 
		window.open(clickTag, "_blank");
	}); 

	backgroundClickOut.addEventListener('click', function(){
		console.log("background clicked");
		window.open(clickTag1, "_blank");
	});
}

function runAnimation() {

	tl1.addLabel('bottomMove', '+=1');
	tl1.addLabel('ctaScale', '+=2'); 
	
	console.log("things are starting"); 
	tl1.to(copy1, .75, {top: 20, delay: 1, ease: Power1.easeOut}); 

	/*tl1.call(frameChange1, [], this, 'bottomMove'); */
	tl1.set(copy2, {display: "block"},'bottomMove');
	tl1.from(copy2, .75, {top: 102, ease: Power1.easeOut}, 'bottomMove');
	
	/*tl1.call(frameChange2, [], this, 'ctaScale');*/
	tl1.to(cta, .5, {scale:1.1}, 'ctaScale');
	tl1.to(cta, .5, {scale: 1}); 

}

function frameChange1() {
	console.log('changing Now');
}

function frameChange2() {
	console.log('changing Again!');
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