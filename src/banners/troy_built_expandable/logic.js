
var creative = {};

var tl1 = new TimelineMax();
var tl2 = new TimelineMax();

var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();

var CURRENT_SECTION = 0;

var mainPanel; 
var mainImage;
var mainCopy; 
    
var videoPlayer;

var walkMowersPanel; 
var walkMowersCTA;
var walkMowersCTAOver;
  
var trimmersPanel;
var trimmersCTA; 
var trimmersCTAOver; 

var ridingMowersPanel;
var ridingCTA;
var ridingCTAOver;

var tillersPanel;
var tillersCTA; 
var tillersCTAOver;   

var lowesLogo;    

var nav;
var navitem1;
var navitem2;
var navitem3;
var navitem4;
var navitem5;

var navitem1OverImg;
var navitem2OverImg;
var navitem3OverImg;
var navitem4OverImg;

var navitem1Copy; 
var navitem2Copy; 
var navitem3Copy; 
var navitem4Copy; 

var nav1Event;
var nav2Event;
var nav3Event;
var nav4Event;

var closebutton; 

var ytp;
var vidName; //to hold the url for each video; passed to the ytp setup function */

var tl_coll = new TimelineMax();

var collapseLogo;
var collapseLowesLogo;

var collapseTopImage;
var collapseTopCopy;

var collapseBottomImage;
var collapseBottomCopy;

var collapseCTACopy;

var collapseBGEvent; 


/**
 * Window onload handler.
 */
function preInit() {
  
  setupDom();
  initCollapse();
  initBanner();
  addListeners();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
} 

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
      // creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-state');
      // creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-state');
      // creative.dom.collapseButton = document.getElementById('collapse-button');
      //creative.dom.expandButton = document.getElementById('expand-button');

} 

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setStartExpanded(false);


  // Polite loading
  if (Enabler.isPageLoaded()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);

  
  // creative.dom.collapseButton.addEventListener('click', onCollapseClickHandler, false);
  // creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  // creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);

} 

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.expandedContent.style.display = 'none';

  //creative.dom.expandedExit.style.display = 'none';
  // creative.dom.collapseButton.style.display = 'none';

   creative.dom.collapsedContent.style.display = 'block';
  // creative.dom.collapsedExit.style.display = 'block';
  // creative.dom.expandButton.style.display = 'block';
  collapseBGEvent.addEventListener('mouseover', onExpandHandler, false);
  
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------


function expandStartHandler() {
  // Show expanded content.
  creative.dom.expandedContent.style.display = 'block';
  // creative.dom.expandedExit.style.display = 'block';
  // creative.dom.collapseButton.style.display = 'block';
   creative.dom.collapsedContent.style.display = 'none';
  // creative.dom.collapsedExit.style.display = 'none';
  // creative.dom.expandButton.style.display = 'none';

  initialAnimation();

  Enabler.finishExpand();
}

function expandFinishHandler() {
  showTrimmers();
  creative.isExpanded = true;
}

function collapseStartHandler() {
  // Perform collapse animation.
  creative.dom.expandedContent.style.display = 'none';
   creative.dom.collapsedContent.style.display = 'block';
   CURRENT_SECTION = 0;

  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
}


function onExpandHandler(){
  addTrackingTag();
  Enabler.requestExpand();
  Enabler.startTimer('Panel Expansion');
}

function exitClickHandler() {
  Enabler.requestCollapse();
  if (creative.dom.ytplayer0 != null) {
    creative.dom.ytplayer0.pause();
  }
  Enabler.stopTimer('Panel Expansion');
 // Enabler.exit('BackgroundExit');
}

function closeExpandedClick() {
  Enabler.requestCollapse();
  if (creative.dom.ytplayer0 != null) {
    creative.dom.ytplayer0.pause();
  }
  Enabler.stopTimer('Panel Expansion');
}

function collapsedExitClickHandler() {
 // Enabler.exit('CollapsedExit');
}


function ctaClickHandler(n) {
    Enabler.requestCollapse();

    if (creative.dom.ytplayer0 != null) {
    creative.dom.ytplayer0.pause();
    }
   
    Enabler.stopTimer('Panel Expansion');
    
    switch(n) {
      case 1: 
        Enabler.exit('walk behind CTA');
      break;   

      case 2: 
        Enabler.exit('trimmers CTA');
      break;  

      case 3: 
        Enabler.exit('riding CTA');
      break; 

      case 4: 
        Enabler.exit('tillers CTA');
      break; 
     } 
}


function initBanner() {
  addVars(); 
  addExpandListeners();
  //initialAnimation(); 
 }


function addVars() {

//  creative.dom = {}; //will need to move to logic.js when merged with collapse 

  mainPanel = document.getElementById('main-panel');
  mainImage = document.getElementById('mainImage');
  mainCopy = document.getElementById('mainCopy');

  videoPlayer = document.getElementById('videoPlayer');

  walkMowersPanel = document.getElementById('walk-behind-mowers-panel'); 
  walkMowersCTA = document.getElementById('walk-behind-cta'); 
  walkMowersCTAOver  = document.getElementById('walk-behind-cta-over'); 

  trimmersPanel = document.getElementById('string-trimmers-panel'); 
  trimmersCTA  = document.getElementById('string-trimmers-cta'); 
  trimmersCTAOver  = document.getElementById('string-trimmers-cta-over'); 

  ridingMowersPanel = document.getElementById('riding-mowers-panel'); 
  ridingCTA = document.getElementById('riding-cta'); 
  ridingCTAOver = document.getElementById('riding-cta-over'); 

  tillersPanel = document.getElementById('tillers-panel'); 
  tillersCTA = document.getElementById('tillers-cta'); 
  tillersCTAOver = document.getElementById('tillers-cta-over');     

  lowesLogo = document.getElementById('lowesLogo'); 

  nav = document.getElementById('nav');
  navitem1 = document.getElementById('navitem1');
  navitem2 = document.getElementById('navitem2');
  navitem3 = document.getElementById('navitem3');
  navitem4 = document.getElementById('navitem4');


  navitem1OverImg = document.getElementById('navitem1OverImg');
  navitem2OverImg = document.getElementById('navitem2OverImg');
  navitem3OverImg = document.getElementById('navitem3OverImg');
  navitem4OverImg = document.getElementById('navitem4OverImg');

  navitem1Copy = document.getElementById('navitem1Copy');
  navitem2Copy = document.getElementById('navitem2Copy');
  navitem3Copy = document.getElementById('navitem3Copy');
  navitem4Copy = document.getElementById('navitem4Copy');

  nav1Event = document.getElementById('nav1Event');
  nav2Event = document.getElementById('nav2Event');
  nav3Event = document.getElementById('nav3Event');
  nav4Event = document.getElementById('nav4Event');

  closebutton = document.getElementById('closebutton');
  
}

function initialAnimation() {

  tl1.addLabel('intro', '0');

  tl1.set(mainCopy, {display: 'block'});
  tl1.to(mainCopy, .5, {top: 136, opacity: 1, ease: Power3.easeOut},"intro+=.5");

  //tween buttons in so not so jumpy
  tl1.to(navitem1, .5, {opacity: 1}, 'intro');
  tl1.to(navitem2, .5, {opacity: 1}, 'intro+=.25');
  tl1.to(navitem3, .5, {opacity: 1}, 'intro+=.5');
  tl1.to(navitem4, .5, {opacity: 1}, 'intro+=1');
}

function hideAllPanels(){
  //hide other panels
  mainPanel.style.display = "none";
  trimmersPanel.style.display = "none";
  ridingMowersPanel.style.display = "none";
  tillersPanel.style.display = "none";
  walkMowersPanel.style.display = "none";
  tl1.clear();
}

function showWalkBehind() {
  if(CURRENT_SECTION == 1){
    return;
  }
  
    // Nav click pixel tracking
    var numGenerator = new Date().getTime();
    document.getElementById('tracking-pixel-5').innerHTML = '<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=snm6eke&ct=0:n0pnc17&fmt=4&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-6').innerHTML = '<img width="1" height="1" src="https://secure.adnxs.com/seg?add=4970137&t=2&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-7').innerHTML = '<img style="display:none;" src="//us-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_4852&src.rand=' + numGenerator + '"/>';
    
    addTrackingTag();
	//forceOut(CURRENT_SECTION);
	hideAllPanels();

  //display current panel items
    lowesLogo.style.display = "block";
    lowesLogo.style.opacity = "1";

    //ytp 
    videoPlayer.style.display = "block";
    vidName = 'https://youtu.be/kxsL5tIG7hw';
    if (!ytp) {
         showYTPlayer0('feature',vidName);
    } else {
      ytp.setYouTubeId('kxsL5tIG7hw', false);
    }

    //enviromental image
    walkMowersPanel.style.display = "block";

    //tween cta button in 
    tl1.set(walkMowersCTA, {display: 'block'}, 'walkCTA+=3');
    tl1.from(walkMowersCTA, .5, {top: 195}, 'walkCTA+=3');
    CURRENT_SECTION =1;
}

function showTrimmers() {
  if(CURRENT_SECTION == 2){
    return;
  }
  
    // Nav click pixel tracking
    var numGenerator = new Date().getTime();
    document.getElementById('tracking-pixel-5').innerHTML = '<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=snm6eke&ct=0:8ake6pl&fmt=4&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-6').innerHTML = '<img width="1" height="1" src="https://secure.adnxs.com/seg?add=4970140&t=2&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-7').innerHTML = '<img style="display:none;" src="//us-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_4851&src.rand=' + numGenerator + '"/>';
    
    addTrackingTag();
    //forceOut(CURRENT_SECTION);
    hideAllPanels();

  //display current panel items
    lowesLogo.style.display = "block";
    lowesLogo.style.opacity = "1";

    //ytp 
    videoPlayer.style.display = "block";
    vidName = 'https://youtu.be/qNZnOQ7SpOY';
    if (!ytp) {                 //check if the player has been intialized yet. 
         showYTPlayer0('feature',vidName);
    } else {                  // if already initialized, change videos
      ytp.setYouTubeId('qNZnOQ7SpOY', false);
    }
    
    //enviromental image
    trimmersPanel.style.display = "block";

    //tween cta button in 
    tl1.set(trimmersCTA, {display: 'block'}, 'trimCTA+=3');
    tl1.from(trimmersCTA, .5, {top: 195}, 'trimCTA+=3');
  CURRENT_SECTION=2;
}

function showRiding() {
  if(CURRENT_SECTION == 3){
    return;
  }
  
    // Nav click pixel tracking
    var numGenerator = new Date().getTime();
    document.getElementById('tracking-pixel-5').innerHTML = '<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=snm6eke&ct=0:lqvj459&fmt=4&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-6').innerHTML = '<img width="1" height="1" src="https://secure.adnxs.com/seg?add=4970138&t=2&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-7').innerHTML = '<img style="display:none;" src="//us-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_4849&src.rand=' + numGenerator + '"/>';
    
    addTrackingTag();
    //forceOut(CURRENT_SECTION);
    hideAllPanels();

  //display current panel items
    lowesLogo.style.display = "block";
    lowesLogo.style.opacity = "1";

    //ytp 
    videoPlayer.style.display = "block";
    vidName = 'https://youtu.be/8wmbGrCnMFg';
    if (!ytp) {
         showYTPlayer0('feature',vidName);
    } else {
      ytp.setYouTubeId('8wmbGrCnMFg', false); 
    }

    ridingMowersPanel.style.display = "block";

    //tween cta button in 
    tl1.set(ridingCTA, {display: 'block'}, 'rideCTA+=3');
    tl1.from(ridingCTA, .5, {top: 195}, 'rideCTA+=3');    
    CURRENT_SECTION=3;
}

function showTillers() {
  if(CURRENT_SECTION == 4){
    return;
  }
  
    // Nav click pixel tracking
    var numGenerator = new Date().getTime();
    document.getElementById('tracking-pixel-5').innerHTML = '<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=snm6eke&ct=0:pv4zti7&fmt=4&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-6').innerHTML = '<img width="1" height="1" src="https://secure.adnxs.com/seg?add=4970144&t=2&' + numGenerator + '"/>';
    document.getElementById('tracking-pixel-7').innerHTML = '<img style="display:none;" src="//us-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_4850&src.rand=' + numGenerator + '"/>';
    
    addTrackingTag();
    //forceOut(CURRENT_SECTION);
    hideAllPanels();
  
  //display current panel items
    lowesLogo.style.display = "block";
    lowesLogo.style.opacity = "1";

    //ytp 
    videoPlayer.style.display = "block";
    vidName = 'https://youtu.be/RJSPw_BeTTQ';
    if (!ytp) {
         showYTPlayer0('feature',vidName);
    } else {
      ytp.setYouTubeId('RJSPw_BeTTQ', false); 
    }
    
    tillersPanel.style.display = "block";

    //tween cta button in 
    tl1.set(tillersCTA, {display: 'block'}, 'tillersCTA+=3');
    tl1.from(tillersCTA, .5, {top: 195}, 'tillersCTA+=3');
    CURRENT_SECTION=4;  
}


function panelCTAOver(event) {
  var eventTarget = (event.target || event.srcElement); //normalize across browesers 
  var ctaItem = eventTarget.id;

  switch(ctaItem) {
      case "walk-behind-cta-over":
        tl2.to(walkMowersCTAOver, .3, {opacity: 1}); 
        break;

      case "string-trimmers-cta-over":
        tl2.to(trimmersCTAOver, .3, {opacity: 1});  
        break;

      case "riding-cta-over":
        tl2.to(ridingCTAOver, .3, {opacity: 1});  
      break; 
        
      case "tillers-cta-over":
        tl2.to(tillersCTAOver, .3, {opacity: 1});   
      break; 
  }

} 

function panelCTAOut(event) {
  var eventTarget = (event.target || event.srcElement); //normalize across browesers 
  var ctaItem = eventTarget.id;
    switch(ctaItem) {
      case "walk-behind-cta-over":
        tl2.to(walkMowersCTAOver, .3, {opacity: 0}); 
        break;

      case "string-trimmers-cta-over":
        tl2.to(trimmersCTAOver, .3, {opacity: 0});  
        break;

      case "riding-cta-over":
        tl2.to(ridingCTAOver, .3, {opacity: 0});  
      break; 
        
      case "tillers-cta-over":
        tl2.to(tillersCTAOver, .3, {opacity: 0});   
      break; 
       
  }

} 


function navOver(event) {
  var eventTarget = (event.target || event.srcElement); //normalize across browesers 
  var navItem = eventTarget.id;
  

  switch(navItem) {
      case "nav1Event":
        tl3.clear();
        tl3.to(navitem1OverImg, .5, {opacity: 1}, 'nav1'); //show vignette img
        tl3.to(navitem1Copy, .5, {className: "navOver", x: 20}, 'nav1'); //move copy over
        tl3.to(navitem1, .5, {width: 234}, 'nav1'); // increase div width to accomodate vignette img
        tl3.to(nav1Event, .5, {width: 234}, 'nav1');

        //move other nav items:
        tl3.to(navitem2, .5, {width: 150}, 'nav1');
        tl3.to(navitem2Copy, .5, {x:42}, 'nav1');

        tl3.to(navitem3, .5, {width: 110}, 'nav1');
        tl3.to(nav3Event, .5, {width: 110}, 'nav1');
        tl3.to(navitem3Copy, .5, {x: 32}, 'nav1');

        tl3.to(navitem4, .5, {width: 105}, 'nav1');
        tl3.to(nav4Event, .5, {width: 105}, 'nav1');
        tl3.to(navitem4Copy, .5, {x: 18}, 'nav1');

        break;

      case "nav2Event":
          tl4.clear();
        tl4.to(navitem2OverImg, .5, {opacity: 1}, 'nav2');
        tl4.to(navitem2Copy, .5, {className: "navOver", x: 30}, 'nav2');
        tl4.to(navitem2, .5, {width: 176}, 'nav2');
        tl4.to(nav2Event, .5, {width: 176}, 'nav2');

        //move other nav items:
        //tl3.to(navitem1, .5, {width: 150}, 'nav1'); 
        tl4.to(navitem1Copy, .5, {x:-15}, 'nav2');

        tl4.to(navitem3, .5, {width: 110}, 'nav2');
        tl4.to(nav3Event, .5, {width: 110}, 'nav2');
        tl4.to(navitem3Copy, .5, {x: 32}, 'nav2');

        tl4.to(navitem4, .5, {width: 105}, 'nav2');
        tl4.to(nav4Event, .5, {width: 105}, 'nav2');
        tl4.to(navitem4Copy, .5, {x: 18}, 'nav2');


        break;

      case "nav3Event":
          tl5.clear();
        tl5.to(navitem3OverImg, .5, {opacity: 1}, 'nav3');
        tl5.to(navitem3Copy, .5, {className: "navOver", x: 10}, 'nav3');
        tl5.to(navitem3, .5, {width: 182}, 'nav3');
        tl5.to(nav3Event, .5, {width: 182}, 'nav3');


        //move other nav items:
        tl5.to(navitem1, .5, {width: 200}, 'nav3');
        tl5.to(nav1Event, .5, {width: 200}, 'nav3'); 
        tl5.to(navitem1Copy, .5, {x:-15}, 'nav3');

        tl5.to(navitem2, .5, {width: 110}, 'nav3');
        tl5.to(nav2Event, .5, {width: 110}, 'nav3');
        tl5.to(navitem2Copy, .5, {x: -18}, 'nav3');

        tl5.to(navitem4, .5, {width: 105}, 'nav3');
        tl5.to(nav4Event, .5, {width: 105}, 'nav3');
        tl5.to(navitem4Copy, .5, {x: 18}, 'nav3');

      break; 
        
      case "nav4Event":
          tl6.clear();
        tl6.to(navitem4OverImg, .5, {opacity: 1}, 'nav4');
        tl6.to(navitem4Copy, .5, {className: "navOver", x: 20}, 'nav4'); 
        tl6.to(navitem4, .5, {width: 145}, 'nav4');
        tl6.to(nav4Event, .5, {width: 145}, 'nav4');

         //move other nav items:
        tl6.to(navitem1, .5, {width: 175}, 'nav4');
        tl6.to(nav1Event, .5, {width: 175}, 'nav4'); 
        tl6.to(navitem1Copy, .5, {x:-10}, 'nav4');

        tl6.to(navitem2, .5, {width: 150}, 'nav4');
        tl6.to(nav2Event, .5, {width: 150}, 'nav4');
        tl6.to(navitem2Copy, .5, {x: -18}, 'nav4');

        tl6.to(navitem3, .5, {width: 130}, 'nav4');
        tl6.to(nav3Event, .5, {width: 130}, 'nav4');
        tl6.to(navitem3Copy, .5, {x: -27}, 'nav4');
      break; 
       
  }

}

function navOut(event) {
  var eventTarget = (event.target || event.srcElement); //normalize across browesers 
  var navItemOut = eventTarget.id;
  switch(navItemOut) {
      case "nav1Event":
      if(CURRENT_SECTION == 1){
        return;
      } 
          tl3.clear();
        tl3.to(navitem1OverImg, .5, {opacity: 0}, 'nav1Out');
        tl3.to(navitem1Copy, .5, {className: "-=navOver", x: 0}, 'nav1Out');
        tl3.to(navitem1, .5, {width: 200}, 'nav1Out'); 
        tl3.to(nav1Event, .5, {width: 200}, 'nav1Out'); 

        //move other nav items:
        tl3.to(navitem2, .5, {width: 150}, 'nav1Out');
        tl3.to(navitem2Copy, .5, {x: 0}, 'nav1Out');

        tl3.to(navitem3, .5, {width: 130}, 'nav1Out');
        tl3.to(nav3Event, .5, {width: 130}, 'nav1Out');
        tl3.to(navitem3Copy, .5, {x: 0}, 'nav1Out');

        tl3.to(navitem4, .5, {width: 120}, 'nav1Out');
        tl3.to(nav4Event, .5, {width: 120}, 'nav1Out');
        tl3.to(navitem4Copy, .5, {x: 0}, 'nav1Out');
        
        break;

      case "nav2Event":
        if(CURRENT_SECTION == 2){
        return;
      } 
          tl4.clear();
        tl4.to(navitem2OverImg, .5, {opacity: 0}, 'nav2Out');
        tl4.to(navitem2Copy, .5, {className: "-=navOver", x: 0}, 'nav2Out');
        tl4.to(navitem2, .5, {width: 150}, 'nav2');
        tl4.to(nav2Event, .5, {width: 150}, 'nav2');

         //move other nav items:
        //tl3.to(navitem1, .5, {width: 150}, 'nav2Out');
        tl4.to(navitem1Copy, .5, {x: 0}, 'nav2Out');

        tl4.to(navitem3, .5, {width: 130}, 'nav2Out');
        tl4.to(nav3Event, .5, {width: 130}, 'nav2Out');
        tl4.to(navitem3Copy, .5, {x: 0}, 'nav2Out');

        tl4.to(navitem4, .5, {width: 120}, 'nav2Out');
        tl4.to(nav4Event, .5, {width: 120}, 'nav2Out');
        tl4.to(navitem4Copy, .5, {x: 0}, 'nav2Out');
        
        break;

      case "nav3Event":
        if(CURRENT_SECTION == 3){
        return;
      } 
          tl5.clear();
        tl5.to(navitem3OverImg, .5, {opacity: 0}, 'nav3Out');
        tl5.to(navitem3Copy, .5, {className: "-=navOver", x: 0}, 'nav3Out');
        tl5.to(navitem3, .5, {width: 130}, 'nav3Out');
        tl5.to(nav3Event, .5, {width: 130}, 'nav3Out');


        //move other nav items:
        tl5.to(navitem1, .5, {width: 200}, 'nav3Out');
        tl5.to(nav1Event, .5, {width: 200}, 'nav3Out'); 
        tl5.to(navitem1Copy, .5, {x:0}, 'nav3Out');

        tl5.to(navitem2, .5, {width: 150}, 'nav3Out');
        tl5.to(nav2Event, .5, {width: 150}, 'nav3Out');
        tl5.to(navitem2Copy, .5, {x: 0}, 'nav3Out');

        tl5.to(navitem4, .5, {width: 120}, 'nav3Out');
        tl5.to(nav4Event, .5, {width: 120}, 'nav3Out');
        tl5.to(navitem4Copy, .5, {x: 0}, 'nav3Out');
        
      break; 
        
      case "nav4Event":
        if(CURRENT_SECTION == 4){
        return;
      } 
          tl6.clear();
        tl6.to(navitem4OverImg, .5, {opacity: 0}, 'nav4Out');
        tl6.to(navitem4Copy, .5, {className: "-=navOver", x: 0}, 'nav4Out'); 
        tl6.to(navitem4, .5, {width: 120}, 'nav4Out');
        tl6.to(nav4Event, .5, {width: 120}, 'nav4Out');

         //move other nav items:
        tl6.to(navitem1, .5, {width: 200}, 'nav4Out');
        tl6.to(nav1Event, .5, {width: 200}, 'nav4Out'); 
        tl6.to(navitem1Copy, .5, {x: 0}, 'nav4Out');

        tl6.to(navitem2, .5, {width: 150}, 'nav4Out');
        tl6.to(nav2Event, .5, {width: 150}, 'nav4Out');
        tl6.to(navitem2Copy, .5, {x: 0}, 'nav4Out');

        tl6.to(navitem3, .5, {width: 130}, 'nav4Out');
        tl6.to(nav3Event, .5, {width: 130}, 'nav4Out');
        tl6.to(navitem3Copy, .5, {x: 0}, 'nav4Out');
        
      break;   
  }
}

function forceOut(n){
  switch(n) {
      case 1:
      
           tl3.clear();
        tl3.to(navitem1OverImg, .5, {opacity: 0}, 'nav1Out');
        tl3.to(navitem1Copy, .5, {className: "-=navOver", x: 0}, 'nav1Out');
        tl3.to(navitem1, .5, {width: 200}, 'nav1Out'); 
        tl3.to(nav1Event, .5, {width: 200}, 'nav1Out'); 

        //move other nav items:
        tl3.to(navitem2, .5, {width: 150}, 'nav1Out');
        tl3.to(navitem2Copy, .5, {x: 0}, 'nav1Out');

        tl3.to(navitem3, .5, {width: 130}, 'nav1Out');
        tl3.to(nav3Event, .5, {width: 130}, 'nav1Out');
        tl3.to(navitem3Copy, .5, {x: 0}, 'nav1Out');

        tl3.to(navitem4, .5, {width: 120}, 'nav1Out');
        tl3.to(nav4Event, .5, {width: 120}, 'nav1Out');
        tl3.to(navitem4Copy, .5, {x: 0}, 'nav1Out');
        
        break;

      case 2:
        
           tl4.clear();
        tl4.to(navitem2OverImg, .5, {opacity: 0}, 'nav2Out');
        tl4.to(navitem2Copy, .5, {className: "-=navOver", x: 0}, 'nav2Out');
        tl4.to(navitem2, .5, {width: 150}, 'nav2');
        tl4.to(nav2Event, .5, {width: 150}, 'nav2');

         //move other nav items:
        //tl3.to(navitem1, .5, {width: 150}, 'nav2Out');
        tl4.to(navitem1Copy, .5, {x: 0}, 'nav2Out');

        tl4.to(navitem3, .5, {width: 130}, 'nav2Out');
        tl4.to(nav3Event, .5, {width: 130}, 'nav2Out');
        tl4.to(navitem3Copy, .5, {x: 0}, 'nav2Out');

        tl4.to(navitem4, .5, {width: 120}, 'nav2Out');
        tl4.to(nav4Event, .5, {width: 120}, 'nav2Out');
        tl4.to(navitem4Copy, .5, {x: 0}, 'nav2Out');
        
        break;

      case 3:
        
      tl5.clear();
        tl5.to(navitem3OverImg, .5, {opacity: 0}, 'nav3Out');
        tl5.to(navitem3Copy, .5, {className: "-=navOver", x: 0}, 'nav3Out');
        tl5.to(navitem3, .5, {width: 130}, 'nav3Out');
        tl5.to(nav3Event, .5, {width: 130}, 'nav3Out');


        //move other nav items:
        tl5.to(navitem1, .5, {width: 200}, 'nav3Out');
        tl5.to(nav1Event, .5, {width: 200}, 'nav3Out'); 
        tl5.to(navitem1Copy, .5, {x:0}, 'nav3Out');

        tl5.to(navitem2, .5, {width: 150}, 'nav3Out');
        tl5.to(nav2Event, .5, {width: 150}, 'nav3Out');
        tl5.to(navitem2Copy, .5, {x: 0}, 'nav3Out');

        tl5.to(navitem4, .5, {width: 120}, 'nav3Out');
        tl5.to(nav4Event, .5, {width: 120}, 'nav3Out');
        tl5.to(navitem4Copy, .5, {x: 0}, 'nav3Out');
        
      break; 
        
      case 4:

          tl6.clear();
        tl6.to(navitem4OverImg, .5, {opacity: 0}, 'nav4Out');
        tl6.to(navitem4Copy, .5, {className: "-=navOver", x: 0}, 'nav4Out'); 
        tl6.to(navitem4, .5, {width: 120}, 'nav4Out');
        tl6.to(nav4Event, .5, {width: 120}, 'nav4Out');

         //move other nav items:
        tl6.to(navitem1, .5, {width: 200}, 'nav4Out');
        tl6.to(nav1Event, .5, {width: 200}, 'nav4Out'); 
        tl6.to(navitem1Copy, .5, {x: 0}, 'nav4Out');

        tl6.to(navitem2, .5, {width: 150}, 'nav4Out');
        tl6.to(nav2Event, .5, {width: 150}, 'nav4Out');
        tl6.to(navitem2Copy, .5, {x: 0}, 'nav4Out');

        tl6.to(navitem3, .5, {width: 130}, 'nav4Out');
        tl6.to(nav3Event, .5, {width: 130}, 'nav4Out');
        tl6.to(navitem3Copy, .5, {x: 0}, 'nav4Out');
        
      break;   
  }

}

function addExpandListeners() { 
  closebutton.addEventListener("click", closeExpandedClick);


  walkMowersCTA.addEventListener("mouseover", panelCTAOver);
  trimmersCTA.addEventListener("mouseover", panelCTAOver);
  ridingCTA.addEventListener("mouseover", panelCTAOver);
  tillersCTA.addEventListener("mouseover", panelCTAOver);

  walkMowersCTA.addEventListener("mouseout", panelCTAOut);
  trimmersCTA.addEventListener("mouseout", panelCTAOut);
  ridingCTA.addEventListener("mouseout", panelCTAOut);
  tillersCTA.addEventListener("mouseout", panelCTAOut);

  walkMowersCTA.addEventListener("click", function(){ctaClickHandler(1)});
  trimmersCTA.addEventListener("click", function(){ctaClickHandler(2)});
  ridingCTA.addEventListener("click", function(){ctaClickHandler(3)});
  tillersCTA.addEventListener("click", function(){ctaClickHandler(4)});

  /*nav1Event.addEventListener("mouseover", navOver);
  nav2Event.addEventListener("mouseover", navOver);
  nav3Event.addEventListener("mouseover", navOver);
  nav4Event.addEventListener("mouseover", navOver);

  nav1Event.addEventListener("mouseout", navOut);
  nav2Event.addEventListener("mouseout", navOut);
  nav3Event.addEventListener("mouseout", navOut);
  nav4Event.addEventListener("mouseout", navOut); 
  */
} 

/** move this to logic.js when combining with collapse **/
/**
 * Shows the YT player.
 */
function showYTPlayer0(containerId, vidName) {
  if (!creative.dom.ytplayer0) {
    creative.ytplayer0Ended = false;
    creative.dom.ytplayer0 = document.createElement('gwd-youtube');
    //var ytp = creative.dom.ytplayer0;
    ytp = creative.dom.ytplayer0;
    ytp.setAttribute('id', 'ytp-0');
    ytp.setAttribute('allowfullscreen', 'true');
    ytp.setAttribute('video-url', vidName);
    ytp.setAttribute('autoplay', 'standard'); // none, standard, preview, intro.
    ytp.setAttribute('preview-duration', '0'); // Only for preview autoplay mode.
    // Adformat parameter required for any creative using a YouTube player.
    ytp.setAttribute('adformat', '1_5');
    ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
    document.getElementById(containerId).appendChild(ytp);

    ytp.addEventListener('playpressed', function() {
      if (creative.ytplayer0Ended) {
        creative.ytplayer0Ended = false;
        Enabler.counter('YTP 0 replay', true);
      }
      Enabler.counter('YTP 0 play pressed', true);
    }, false);
    ytp.addEventListener('paused', function() {
      Enabler.counter('YTP 0 paused', true);
    }, false);
    ytp.addEventListener('ended', function() {
      Enabler.counter('YTP 0 ended', true);
      creative.ytplayer0Ended = true;
    }, false);
    ytp.addEventListener('viewed0percent', function() {
      Enabler.counter('YTP 0 viewed 0%');
    }, false);
    ytp.addEventListener('viewed25percent', function() {
      Enabler.counter('YTP 0 viewed 25%');
    }, false);
    ytp.addEventListener('viewed50percent', function() {
      Enabler.counter('YTP 0 viewed 50%');
    }, false);
    ytp.addEventListener('viewed75percent', function() {
      Enabler.counter('YTP 0 viewed 75%');
    }, false);
    ytp.addEventListener('viewed100percent', function() {
      Enabler.counter('YTP 0 viewed 100%');
    }, false);
    ytp.addEventListener('previewed0percent', function() {
      Enabler.counter('YTP 0 previewed 0%');
      if (!ytp.a.isMuted()) {
        ytp.toggleMute();
      }
    }, false);
    ytp.addEventListener('previewed25percent', function() {
      Enabler.counter('YTP 0 previewed 25%');
    }, false);
    ytp.addEventListener('previewed50percent', function() {
      Enabler.counter('YTP 0 previewed 50%');
    }, false);
    ytp.addEventListener('previewed75percent', function() {
      Enabler.counter('YTP 0 previewed 75%');
    }, false);
    ytp.addEventListener('previewed100percent', function() {
      Enabler.counter('YTP 0 previewed 100%');
    }, false);
  }
  else {
    creative.dom.ytplayer0.style.display = 'block';
  }
} 

/**
 * Removes the YTPlayer from the DOM.
 */
function hideYTPlayer0(containerId) {
  if (creative.dom.ytplayer0 != null) {
    creative.dom.ytplayer0.pause();
    creative.dom.ytplayer0.style.display = 'none';
  }
} 

/* COLLAPSED SCRIPTS */

function initCollapse() { 
  getCollapseVars();
  runCollapseAnimation();
}


function getCollapseVars() {

  collapseLogo = document.getElementById('collapseLogo');
  collapseLowesLogo = document.getElementById('collapseLowesLogo');

  collapseTopImage = document.getElementById('collapseTopImage');
  collapseTopCopy = document.getElementById('collapseTopCopy');

  collapseBottomImage = document.getElementById('collapseBottomImage');
  collapseBottomCopy = document.getElementById('collapseBottomCopy');

  collapseCTACopy = document.getElementById('collapseCTACopy');

  collapseBGEvent = document.getElementById('collapseBGEvent');
}

function runCollapseAnimation() {
  //tl_coll.addLabel('topHalf', '+=.5');
  tl_coll.addLabel('imgSwitch', '+=3.5'); 
  tl_coll.addLabel('expandCopy', '+=6'); 

  //tl_coll.set(collapseTopCopy, {display: 'block'}, 'topHalf');
  //tl_coll.from(collapseTopCopy, .5, {left: 400}, 'topHalf'); 
  
  tl_coll.to(collapseTopImage, .5, {left: -300}, 'imgSwitch'); //1st image out
  tl_coll.to(collapseTopCopy, .5, {left: -300}, 'imgSwitch'); //1st copy out
  
  tl_coll.set(collapseBottomImage, {display: 'block'}, 'imgSwitch');
  tl_coll.set(collapseBottomCopy, {display: 'block'}, 'imgSwitch');
  tl_coll.from(collapseBottomImage, .5, {left: 300, ease: Power3.easeOut}, 'imgSwitch'); //2nd img in 
  tl_coll.from(collapseBottomCopy, .5, {left: 300, ease: Power3.easeOut}, 'imgSwitch'); //2nd copy in 

  //tl_coll.to(collapseBottomCopy, .5, {left: -300}, 'imgSwitch+=1.5'); //2 copy out 

  tl_coll.set(collapseCTACopy, {display: 'block'}, 'expandCopy');
  tl_coll.set(collapseLowesLogo, {display: 'block'}, 'expandCopy');

  //tl_coll.to(collapseTopCopy, .5, {opacity: 0}, 'expandCopy');
  tl_coll.to(collapseBottomCopy, .5, {opacity: 0}, 'expandCopy');

  tl_coll.to(collapseCTACopy, .5, {top: 156, opacity: 1, ease: Power3.easeOut}, 'expandCopy+=1');
  tl_coll.to(collapseLowesLogo, .5, {opacity: 1}, 'expandCopy+=1');
}


function resetCollapseAnimation(){

  tl_coll.clear();
  
  tl_coll.set(collapseTopImage, {display: 'none'});
  tl_coll.set(collapseTopImage, {opacity: 0}); 

  tl_coll.set(collapseBottomImage, {display: 'block'});
  tl_coll.set(collapseBottomImage, {opacity: 1});
  
  tl_coll.set(collapseTopCopy, {opacity: 0});
  tl_coll.set(collapseBottomCopy, {opacity: 0});
  tl_coll.set(collapseTopCopy, {display: 'none'});
  tl_coll.set(collapseBottomCopy, {display: 'none'});

  tl_coll.set(collapseCTACopy, {display: 'block'});
  tl_coll.set(collapseLowesLogo, {display: 'block'});
  tl_coll.set(collapseCTACopy, {opacity: 1});
  tl_coll.set(collapseLowesLogo, {opacity: 1});

}

function addTrackingTag() {
 var numGenerator = new Date().getTime(); 
document.getElementById('tracking-pixel-1').innerHTML = '<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/conv/?adv=snm6eke&ct=0:ax17u8q&fmt=4&' + numGenerator + '"/>';
document.getElementById('tracking-pixel-2').innerHTML = '<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=snm6eke&ct=0:mf2ir5e&fmt=4&' + numGenerator + '"/>';
document.getElementById('tracking-pixel-3').innerHTML = '<!-- Conversion Pixel - TROY BILT_FULL LINE_CONVERSION - DO NOT MODIFY --> <img src="https://secure.adnxs.com/px?id=686524&seg=4879483&t=2?' + numGenerator + '" ' + 'width="1" height="1" /><!-- End of Conversion Pixel -->';
document.getElementById('tracking-pixel-4').innerHTML = '<!-- Segment Pixel - TROY BILT_FULL LINE_RTG - DO NOT MODIFY --> <img src="https://secure.adnxs.com/seg?add=4891652&t=2?' + numGenerator + '" ' + 'width="1" height="1" /><!-- End of Segment Pixel -->';
}



/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);