jQuery(function($){

var trackIds = [245189535, 247806970, 100291559];

var trackPlayCount = 0;
var currentIndex = 0;
//allows use for soundcloud widget api
var widget = SC.Widget('soundcloud-widget');

//functions that will show a certain text when clicked
function musicInfoJpop() {
  document.getElementById("para").innerHTML =
  "J-pop is an abbreviation for Japanese. J-pop is probably the hardest genre of Japanese music to categorize or describe. As is the case for 'pop music' in the United States, a great deal of different sounds tend to fall under this label. A lot of the bands tend to have a cutesy, 'bubble-gum' pop sound while others tend to exhibit a more edgy dance, r&b, or funk sound. The teen idols of Japan are just as big (if not bigger) as the Britney Spears and Nsync's of the U.S. The members of bands such as Morning Musume, Tanpopo, Luna Sea, and Da Pump are worshiped as pop culture icons."
}

musicInfoJpop();

function musicInfoJrap() {
  document.getElementById("para").innerHTML =
  "Japanese hip-hop is a subgenre of japanese music. Japanese hip hop generally tends to be most directly influenced by old school hip hop, taking from the era's catchy beats, dance culture, and overall fun and carefree nature and incorporating it into their music."
}


function musicInfoJelectro() {
  document.getElementById("para").innerHTML =
  "Japanese electro is a subgenre of japanese pop music. Similar to standard electronic music in the us, j-electro uses electronically produced sounds recorded on tape and arranged by the composer to form a musical composition. Because J-electro's origins lie in Japan, J-electro's singers often speak solely in japanese"
}


//function to load soundcloud widget api
function playTrack(index){
  widget.load(
  "https://api.soundcloud.com/tracks/" + trackIds[index],
  {
    auto_play: true,
    show_artwork: false,
    liking: false,
    sharing: false,
    show_comments: false,
    show_playcount: false
  });
    trackPlayCount ++;
    currentIndex = index;
  }
  //when this function is fired, the playlist will play the next song in the playlist
  function playNext(){
    var nextIndex = currentIndex + 1;
    if (nextIndex >= trackIds.length){
      nextIndex =0;
    }
    playTrack(nextIndex);
  }

  //will play the following tracks based on the button they click
  function playSong0(){
    currentIndex = 0;
    var nextIndex = currentIndex;
    playTrack(nextIndex)
  }

  //will play the following tracks based on the button they click
  function playSong1(){
    currentIndex = 1;
    var nextIndex = currentIndex;
    playTrack(nextIndex)
  }
  //will play the following tracks based on the button they click
  function playSong2(){
    currentIndex = 2;
    var nextIndex = currentIndex;
    playTrack(nextIndex)
  }

  function playPrev(){
    var nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = trackIds.length - 1;
    }
    playTrack(nextIndex);
  }
  function playToggle(){
    widget.toggle();
  }
  function trackFinished() {
    playNext();
  }

  //when the user clicks on the j-electro button, the player will play Miku song
  function jTraditional() {
    playSong0();
  }
//when the user clicks on the j-electro button, the player will play Miku song
  function jElectroPlay() {
    playSong1();
  }
  //when the user clicks on the j-hip-hop button, the player will play M-flo song
  function jElectroRap() {
    playSong2();
  }

// Bind Functions to eventHandlers
// when current track is finished, soundcloud will play the next track
  widget.bind(SC.Widget.Events.FINISH, trackFinished);
// Event handlers when played on toggle
  $('#play-toggle').on('click', playToggle);

  $('#prev').on('click', playPrev);

  $('#next').on('click', playNext);

  $('#j-traditional').on('click', jTraditional);

  $('#j-traditional').on('click', musicInfoJpop);

  $('#j-electro').on('click', jElectroPlay);

  $('#j-electro').on('click', musicInfoJelectro);

  $('#j-rap').on('click', jElectroRap);

  $('#j-rap').on('click', musicInfoJrap);

  //plays first track of array by default
  playTrack(0);

});
