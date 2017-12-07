
tl1 = new TimelineMax();

function initCreative(){
	//addVars();
	addListeners();
	container.style.display = "block";	
	runAnimation(tl1);
}

/*function addVars() {
	//default vars	
}*/

function addListeners(){
	cta.addEventListener('click', ctaClick);
	clickArea.addEventListener('click', bkgclick);

}

function runAnimation(tl1) {

	tl1.addLabel("frame1", "+=.5");
	tl1.addLabel("frame2and3", "+=3.8");
	tl1.addLabel("endframe", "+=13");


	tl1.to(bill, .5, {y:-30, ease:Power1.easeInOut}, "frame1");
	tl1.from(mGlass1, .75, {x:-20,rotation:35, transformOrigin: 'bottom right', ease:Power1.easeInOut},"frame1+=1");
	tl1.to(mGlass1, .75, {opacity:1,ease:Power1.easeInOut}, "frame1+=1");
	tl1.to(largeBill, .25, {opacity:1,ease:Power1.easeInOut}, "frame1+=1.5");

	tl1.to(h1c, .25, {opacity:0, y:-10,ease:Power1.easeInOut}, "frame1+=3");
	tl1.to(h1b, .25, {opacity:0, y:-10,ease:Power1.easeInOut}, "frame1+=3.1");
	tl1.to(h1a, .25, {opacity:0, y:-10,ease:Power1.easeInOut}, "frame1+=3.2");
	tl1.to(mGlass1, .25, {opacity:0, ease:Power1.easeInOut}, "frame1+=3.2");
	tl1.to(envelope, .25, {opacity:0, ease:Power1.easeInOut}, "frame1+=3.2");
	tl1.to(largeBill, .25, {opacity:0, ease:Power1.easeInOut}, "frame1+=3.25");

	//tl1.set(frame1, {display:'none'}, "frame2and3");
	tl1.to(frame1, .5, {opacity:0, ease:Power1.easeInOut}, "frame2and3");
	tl1.to(wipe, .5, {y:-248, ease:Power1.easeInOut}, "frame2and3");
	tl1.to(buildings, .5, {y:-120, ease:Power1.easeInOut}, "frame2and3+=.5");

	var f2Heading1= [h2a, h2b, h2c];
	var f2Heading2= [h2d, h2e];
	var f2Heading3= [h2f, h2L1, h2L1m, h2L2, h2L2m];

	tl1.to(h2a, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=.5");
	tl1.to(h2b, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=.6");
	tl1.to(h2c, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=.7");

	tl1.to(h2d, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=.8");
	tl1.to(h2e, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=.9");
	tl1.to(h2f, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=1");
	tl1.to(h2L1m, .75, {x:-50, ease:Power1.easeInOut}, "frame2and3+=1");
	tl1.to(h2L2m, .75, {x:50, ease:Power1.easeInOut}, "frame2and3+=1");	

	tl1.from(mGlass2, .75, {x:-20,rotation:35, transformOrigin: 'bottom right', ease:Power1.easeInOut},"frame2and3+=1.25");
	tl1.to(mGlass2, .75, {opacity:1,ease:Power1.easeInOut}, "frame2and3+=1.25");
	tl1.to(largeBuildings, .25, {opacity:1,ease:Power1.easeInOut}, "frame2and3+=1.75");

	tl1.to(f2Heading3, .25, {opacity:0, y:-10,ease:Power1.easeInOut}, "frame2and3+=4.2"); 
	tl1.to(f2Heading2, .25, {opacity:0, y:-10,ease:Power1.easeInOut}, "frame2and3+=4.4"); 
	tl1.to(f2Heading1, .25, {opacity:0, y:-10,ease:Power1.easeInOut}, "frame2and3+=4.6"); 

	tl1.to(mGlass2, .25, {opacity:0,ease:Power1.easeInOut}, "frame2and3+=4.4"); //4.4
	tl1.to(largeBuildings, .25, {opacity:0,ease:Power1.easeInOut}, "frame2and3+=4.4"); //4.4
	//tl1.to(buildings, .25, {opacity:0,ease:Power1.easeInOut}, "frame2and3+=4.4"); 

	tl1.to(building, .5, {opacity:1, ease:Power1.easeInOut}, "frame2and3+=4.4");
	tl1.to(buildings, .25, {opacity:0,ease:Power1.easeInOut}, "frame2and3+=4.9"); 
	
	tl1.to(h3a, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=4.7"); 
	tl1.to(h3b, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=4.8"); 
	tl1.to(h3c, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=4.9"); 
	tl1.to(h3L1m, .75, {x:-50, ease:Power1.easeInOut}, "frame2and3+=4.9"); 
	tl1.to(h3L2m, .75, {x:50, ease:Power1.easeInOut}, "frame2and3+=4.9"); 
	tl1.to(h3d, .75, {opacity:1, y:10,ease:Power1.easeInOut}, "frame2and3+=5.0"); 
	//tl1.to(building, .5, {opacity:1, ease:Power1.easeInOut}, "frame2and3+=5.25"); //4.25

	
	tl1.to(wipe, .5, {y:-2, ease:Power1.easeInOut}, "frame2and3+=8.5"); //6.5

	tl1.set(endframe, {display: 'block'}, "endframe");
	tl1.set(cta, {display: 'block'}, "endframe");
	tl1.to(endheadline, .75,{opacity:1, ease:Power1.easeInOut}, "endframe");
	tl1.to(endL1m, .75, {x:-50, ease:Power1.easeInOut}, "endframe");
	tl1.to(endL2m, .75, {x:50, ease:Power1.easeInOut}, "endframe");	
	tl1.to(logos, .75, {opacity: 1, ease:Power1.easeInOut}, "endframe");	
	tl1.from(endBldg, .75, {y:120, ease:Power1.easeInOut}, "endframe+=.5"); 
	tl1.to(cta, .75, {opacity:1, ease:Power1.easeInOut}, "endframe+=.5"); 
	
}

function ctaOver() {
	//console.log('CTA Over'); 
	tl2 = new TimelineMax(); 
	tl2.to(ctaHover, .3, {opacity: 1}); 
}

function ctaOut(){
	//console.log('CTA Out'); 
	tl2 = new TimelineMax(); 
	tl2.set(ctaHover, {opacity: 0}); 
}

function bkgclick(){
	//console.log("bkg click");
	//window.open(clickTag1, "_blank");
}	

function ctaClick(){
	//console.log("CTA click");
	//window.open(clickTag, "_blank");
}

