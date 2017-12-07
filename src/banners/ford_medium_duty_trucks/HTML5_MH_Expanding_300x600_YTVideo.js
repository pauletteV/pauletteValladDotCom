
//"use strict"

//var debugMode = true;
//var log = function (msg) { debugMode && window.console && console.log ? console.log(msg) : null;};if(debugMode){log("****** DEBUG IS ON AMIGO ******");}

var ytp;
var firstPlay = true;  
var videoReady = false;

var vid;
var cta;
var currentVidNum =1;
//var menuExtended = false;
var teaserVid; // for 8 sec teaser

var videoplaceholder;
var menu;
var menu_icon_over1;
var menu_icon_over2;
var menu_icon_over3;
var menu_icon_over4;
var logoCollapse;
var logoExpand;
var intro_play_btn; 
var intro_play_btnVisible;
var ctaCollapse;
var ctaExpand; 
var v1;
var collapsePanel;
var expandPanel;
var expandPanelCloseBtn;
var collapseVideo;
var videoNumber;

// -- for custom video controls -- //
var customPlay;
var customPause; 
var customMute;
var customUnMute; 
var ytpPlaying = false;  
var audioOn = false; 
var timeDisplay; 
var vidTime = 0; 
var timeInterval; 

//for expansion
var isExpanded = false; 

var player = 
    {
      'containerId': 'video-player', 
      'videoId': '5-fL1nwmiAM',
      'videoWidth': 600,
      'videoHeight': 250,
      'suggestedQuality': 'medium',
      'playerVars': 
      {
        'autoplay': 0, /*With autoplay enabled, the video won't get video views. */
        'rel': 0,
        'showinfo': 0,
        'controls': 0, 
        'html5': 1, 
      }
    };

//----Setting up----    

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
    // Start ad, initialize animation,
    // load in your image assets, call Enabler methods,
    // and/or include other Studio modules.
    // Or also, you can start the Polite Load
    Enabler.setExpandingPixelOffsets(300, 0, 600, 600, false, false);
    teaserVid = document.getElementById('video1');
    
    /*Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
          studio.video.Reporter.attach('video_1', teaserVid);
    });*/

    InitMH();
}

function addListeners(){
  //Exits
  document.getElementById("bottom_image_collapse").addEventListener('click', bgExitHandler, false);
  //document.getElementById("cta_collapse").addEventListener('click', ctaExitHandler, false);
  document.getElementById("logo_img_collapse").addEventListener('click', logoExitHandler, false);

  document.getElementById("bottom_image_expand").addEventListener('click', bgExitHandler, false);
  document.getElementById("cta_expand").addEventListener('click', ctaExitHandler, false);
  document.getElementById("logo_img_expand").addEventListener('click', logoExitHandler, false);

  document.getElementById("expandCloseBtn").addEventListener('click', actionClickHandler, false);

  teaserVid.addEventListener('ended', onended, false); 
}

//This function should be called only after the Enabler.isInitialized
function InitMH(){

  Enabler.loadScript(Enabler.getUrl('https://www.gstatic.com/doubleclick/studio/innovation/h5/ytplayer/ytp_v2.js'), YTFunction);

  //Adding listeners
  addListeners();
  addVars();
  
      /*vid = document.getElementById("video1");
      vid.onended = function() {
            // alert("The audio has ended");

          v1 = document.getElementById("video1"); 
          TweenMax.to(v1, 0, {alpha:0});      // hide intro video when video is done to reveal the video still 
          
          
          TweenMax.to(intro_play_btnVisible, 0, {css:{visibility:'visible'}}); // reveals the play btn when intro video ends

          //extendVideoMenu(); - not needed in this version, no retracting menu

          //make vid1still clickable to play the 1st video 
          //document.getElementById("videoplaceholder").addEventListener('click', playFirstVid, false);

          //listener for expansion
          document.getElementById("videoplaceholder").addEventListener('mouseover', actionClickHandler, false);

          Enabler.counter('auto_introvideo_8_silent_c');
        };

          TweenMax.to(logoCollapse, .5, {opacity:1,ease:Power1.easeOut});*/

}

function onended(e) {
//log("on ended has been called"); 
          
   v1 = document.getElementById("video1"); 
   TweenMax.to(v1, 0, {alpha:0});      // hide intro video when video is done to reveal the video still 
          
    intro_play_btnVisible = document.getElementById("playBtn"); 
    TweenMax.to(intro_play_btnVisible, 0, {css:{visibility:'visible'}}); // reveals the play btn when intro video ends

    //extendVideoMenu();
    //make vid1still clickable to play the 1st video 
    document.getElementById("videoplaceholder").addEventListener('click', playFirstVid, false);

    //listener for expansion
    document.getElementById("videoplaceholder").addEventListener('mouseover', actionClickHandler, false);

   // Enabler.counter('auto_introvideo_8_silent_c');        
          
};


function addVars() {
  //default vars
  menu = document.getElementById('menuholder');


  logoCollapse = document.getElementById('logo_img_collapse');
  logoExpand = document.getElementById('logo_img_expand');
  ctaCollapse = document.getElementById('cta_collapse');
  ctaExpand = document.getElementById('cta_expand');

  collapsePanel= document.getElementById('collapse-panel');
  expandPanel= document.getElementById('expand-panel');
  intro_play_btnVisible = document.getElementById("playBtn"); 

  videoplaceholder =document.getElementById('videoplaceholder');

  customPlay = document.getElementById('customPlay');
  customPause = document.getElementById('customPause');
  customMute = document.getElementById('customMute');
  customUnMute = document.getElementById('customUnMute');
  timeDisplay = document.getElementById('timeDisplay');


  menu_icon_over1 = document.getElementById('menu_icon_over1');
  menu_icon_over2 = document.getElementById('menu_icon_over2');
  menu_icon_over3 = document.getElementById('menu_icon_over3');
  menu_icon_over4 = document.getElementById('menu_icon_over4');
  
}

//hide intro play btn when clicked -- dont' need, button is being hidden when expansion is called 
//function hidePlayBtn(){ TweenMax.to(intro_play_btn, 0, {opacity:0 }); }  


function rollOverIcon1(){ TweenMax.to(menu_icon_over1, .25, {opacity:1}); }
function rollOverIcon2(){ TweenMax.to(menu_icon_over2, .25, {opacity:1 }); }
function rollOverIcon3(){ TweenMax.to(menu_icon_over3, .25, {opacity:1 }); }
function rollOverIcon4(){ TweenMax.to(menu_icon_over4, .25, {opacity:1 }); }

function rollOutIcon1(){ TweenMax.to(menu_icon_over1, 0, {opacity:0 }); }
function rollOutIcon2(){ TweenMax.to(menu_icon_over2, 0, {opacity:0 }); }
function rollOutIcon3(){ TweenMax.to(menu_icon_over3, 0, {opacity:0 }); }
function rollOutIcon4(){ TweenMax.to(menu_icon_over4, 0, {opacity:0 }); }

//plays 1st video from end of teaser
function playFirstVid() {
  
  clickIcon(1);
  ytp.mute(); 
  audioOn = false;
  //Enabler.counter("auto_Case 1_xx_silent_start_c");  
}


  function clickIcon(b){
    //log(b + "clicked");

    //  hideAllYTPlayers();

    /*if(menuExtended){
      retractVideoMenu();
    }*/
    var myElement = document.getElementById('video-player');
      // {className:"+=class2"});
    TweenMax.to(myElement, 0, {css:{visibility:'visible'}});

    customPause.style.display = 'block';
    customPlay.style.display = 'none'; 

    switch(b){
      case 1:
          ytp.loadVideoById("v6YmBAyUvXk");
          videoNumber = "user_Case_1";
          //Enabler.counter('user_Case_1_xx_audio_start_c');
          ytp.unMute();
          audioOn = true;
          ytpPlaying = true;   
      break;

      case 2:
          ytp.loadVideoById("v6YmBAyUvXk");
          videoNumber = "user_Case_2"; 
          //Enabler.counter('user_Case_2_xx_audio_start_c');
          ytp.unMute(); 
          audioOn = true;
          ytpPlaying = true; 
      break;

      case 3:
          ytp.loadVideoById("v6YmBAyUvXk");
          videoNumber = "user_Case_3";
          //Enabler.counter('user_Case_3_xx_audio_start_c'); 
          ytp.unMute(); 
          audioOn = true;
          ytpPlaying = true;   
      break;

      case 4:
          ytp.loadVideoById("v6YmBAyUvXk");
          videoNumber = "user_Case_4";
          //Enabler.counter('user_Case_4_xx_audio_start_c');
          ytp.unMute(); 
          audioOn = true;
          ytpPlaying = true;      
      break;
    }
   
    vidTime = 0; //resets the time code for each video 
    //log(videoNumber);
  }



function cta_hover() {
  //TweenMax.to(menu_icon_over1, .25, {opacity:1});  
 // TweenMax.to(cta, 0, {css{background-position:"-91px 0px "}});
   TweenMax.to(ctaCollapse, 0, {backgroundPosition:'-91px 0px'});
   TweenMax.to(ctaExpand, 0, {backgroundPosition:'-91px 0px'});
}

function cta_out() {
   // TweenMax.to(cta, 0, {css{background-position:"0px 0px"}});
   TweenMax.to(ctaCollapse, 0, {backgroundPosition:'0px 0px'});
   TweenMax.to(ctaExpand, 0, {backgroundPosition:'0px 0px'});

  //TweenMax.to(cta, 0, {className:""});
}
function ctaClick() {
 
 }



//----Exits----
function bgExitHandler(e) {
  //Enabler.exitOverride('Background Exit', 'URL');
  //Enabler.exit('OpenSpaceClickOut_e');
   teaserVid.pause(); 
   ytp.pauseVideo();
   if(isExpanded){
      //actionClickHandler();
      Enabler.collapse(); 
   }
}

function ctaExitHandler(e) {
  //Enabler.exitOverride('CTA Exit', 'http://www.this.will.always.navigate.here.com');
   //Enabler.exit('LearnMore_e');
   teaserVid.pause(); 
   ytp.pauseVideo();
   if(isExpanded){
      //actionClickHandler(); 
      Enabler.collapse(); 
   }
}

function logoExitHandler(e) {
  //Enabler.exitOverride('Logo Exit', 'http://www.this.will.always.navigate.here.com');
   //Enabler.exit('BFTShield_e');
   teaserVid.pause(); 
   ytp.pauseVideo();
   if(isExpanded){
      //actionClickHandler();
      Enabler.collapse();  
   }
}

/*
//----YTClose Button----
function btnYTCloseHandler(e) {
  Enabler.stopTimer('YTVideo Timer');
}*/

//----YouTube Player----
function YTFunction(){
  // YouTube player properties configuration.

  // Construct the YouTube player variable.
 ytp = new studioinnovation.YTPlayer(player);

  // Bind event listeners.
  bindListeners();
}

function YTPlaying(){
  ytpPlaying = true; 
  updateYTtime(); 
  if(firstPlay){
    //Enabler.counter(videoNumber + '_xx_audio_playbutton_c'); 
  }
  else{
    //Enabler.counter(videoNumber + '_xx_audio_replay_c');
    firstPlay = true;
    if(ytp.isMuted){
      ytp.unMute();
    }
  } 
}

// YT Player State
function handleVideoStateChange(stateChangeEvent){
  var playerState = stateChangeEvent.getPlayerState();

  switch(playerState){ 
    case studioinnovation.YTPlayer.Events.PLAYING:
      ytpPlaying = true; 
      YTPlaying(); 
      //changes icons on pause and play  
      customPause.style.display = 'block';
      customPlay.style.display = 'none';     
    break;

    case studioinnovation.YTPlayer.Events.PAUSED:
      ytpPlaying = false; 
      
      //changes icons on pause and play  
      customPlay.style.display = 'block';
      customPause.style.display = 'none';
      //Enabler.counter(videoNumber + '_xx_audio_pauses_c');
      //Enabler.stopTimer('YTVideo Timer');
      clearInterval(timeInterval);
    break;

    case  studioinnovation.YTPlayer.Events.TIMER_START:
      //starts timecode when event is triggered 
      timeInterval = setInterval(updateYTtime, 1000); 
      //Enabler.startTimer('YTVideo Timer');
    break;

    case  studioinnovation.YTPlayer.Events.TIMER_STOP:
      //Enabler.stopTimer('YTVideo Timer');
      //stops the timecode from incrementing
      clearInterval(timeInterval);
    break;

    case studioinnovation.YTPlayer.Events.ENDED:
      //Enabler.stopTimer('YTVideo Timer');
      firstPlay = false;
       //stops the timecode from incrementing
      clearInterval(timeInterval);
      vidTime = 0; //resets timecode to 0
      customPause.style.display = 'none';
      customPlay.style.display = 'block';
      ytpPlaying = false; 

    break;
  }
}

function bindListeners(){
  
  ytp.addEventListener('statechange', handleVideoStateChange, false);

  // YouTube playback quartiles.
  /*ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_0_PERCENT, function() {
    Enabler.counter(videoNumber + '_xx_audio_YTVideo Percent 0');
  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_25_PERCENT, function() {
    Enabler.counter(videoNumber + '_xx_audio_YTVideo Percent 25');
  }, false); 
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_50_PERCENT, function() {
    Enabler.counter(videoNumber + '_xx_audio_YTVideo Percent 50');
  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_75_PERCENT, function() {
    Enabler.counter(videoNumber + '_xx_audio_YTVideo Percent 75');
  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_100_PERCENT, function() {
    Enabler.counter(videoNumber + '_xx_audio_YTVideo Percent 100');
  }, false);*/

}


/*function muteChecker(){

var muteCheck = ytp.isMuted(); //checks if the player is or is not muted 

  if (muteCheck) {
      Enabler.counter(videoNumber + '_xx_audio_mutes_c');
  } else {
      Enabler.counter(videoNumber + '_xx_audio_unmutes_c');
  } 
}*/


//--expand/collapse ---//


//-- handlers --
function expandStartHandler() {
    //Perform expand animation
    TweenMax.to(expandPanel, 0, {css:{visibility:'visible'}}); //reveals expand panel
    TweenMax.to(intro_play_btnVisible, 0, {css:{visibility:'hidden'}}); // hides the intro play btn when intro video ends
    playFirstVid();
    Enabler.finishExpand();
    //Enabler.counter("RolloverExpansion_c");
}

function expandFinishHandler() {
  // Convenience callback for setting
  // final state when expanded.
  isExpanded = true;
  

}

function collapseStartHandler() {
  // Perform collapse animation.
  TweenMax.to(expandPanel, 0, {css:{visibility:'hidden'}}); //hides expand panel

  var collapseVideo = document.getElementById('video-player');
  TweenMax.to(collapseVideo, 0, {css:{visibility:'hidden'}}); //hides player

  ytp.pauseVideo();// stopvideo player
  //Enabler.stopTimer('YTVideo Timer') //stop timer
  // When animation finished must call
  document.getElementById("videoplaceholder").removeEventListener('mouseover', actionClickHandler, false); //removes rollover to expand 
  
  TweenMax.to(intro_play_btnVisible, 0, {css:{visibility:'visible'}}); // reveals the play btn again

  //Enabler.reportManualClose(); 

  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  // Convenience callback for setting
  // final state when collapsed.
  isExpanded = false;
  document.getElementById("videoplaceholder").addEventListener('mouseover', actionClickHandler, false);
}



function actionClickHandler() {
  isExpanded ? Enabler.requestCollapse() : Enabler.requestExpand();
}

 //-- listeners for triggered expand/collapse events --
 Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
 Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
 Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
 Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);


 // --custom video player controls -- //

function playPauseToggle() {
if(ytpPlaying == true){
      customPause.style.display = 'none';
      customPlay.style.display = 'block';
      ytp.pauseVideo();
    } else if(ytpPlaying == false) {
      customPause.style.display = 'block';
      customPlay.style.display = 'none';
      ytp.playVideo();
    } 
}

function audioToggle(state) {
  if(audioOn == true){
    ytp.mute();
    customMute.style.display = 'none';
    customUnMute.style.display = 'block';
    audioOn = false;
    //Enabler.counter(videoNumber + '_xx_audio_mutes_c');
  }else{
    ytp.unMute();
    customMute.style.display = 'block';
    customUnMute.style.display = 'none';
    audioOn = true;
    //Enabler.counter(videoNumber + '_xx_audio_unmutes_c');
  }
};

function updateYTtime(){
  //log(vidTime);
  //log(vidTime.time()); 
  vidTime++; 
  minutes = Math.floor(vidTime / 60); //displays minutes for videos 
  //converts seconds to proper format
  if (vidTime >= 60) {
    seconds = vidTime - 60; 
  } else {
    seconds = vidTime; 
  }
  //formats seconds with leading 0
  if (seconds < 10) {
    seconds = ('0' + seconds);
  } /*else {
    seconds = vidTime; 
  }*/
 timeDisplay.innerHTML = (minutes + ":" + seconds); 
  //log(vidTime + "after increment");
};
