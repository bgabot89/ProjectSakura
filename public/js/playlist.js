jQuery(function($){

//array of track ids. arr[0] = j-pop, arr[1] = j-hiphop, arr[2] = j-electro,
var trackIds = [245189535, 27052245, 247806970];

var playState = false;
var trackPlayCount = 0;
var currentIndex = 0;
//allows use for soundcloud widget api
var widget = SC.Widget('soundcloud-widget');

//function will determine if image shown will be play and/or pause
function playStateButton() {
  if (playState == true) {
    console.log('it is playing');
  }
}
playStateButton();

//when this function is called, the pause button will appear
function showPlay() {
  document.getElementById('play').style.visibility = "visible";
}


//when this function is called, the pause button will appear
function showPause() {
  document.getElementById('pause').style.visibility = "visible";
}

//button event handler for pause and play button
$('#play_button').on("click", function(){
  //  alert('hello world');
  if (playState == true) {
   document.getElementById('play').style.visibility = "hidden";
   showPause();
   playState = false;
   console.log('switched to' + ' ' + playState);
}
  else if (playState == false){
   document.getElementById('pause').style.visibility = "hidden";
   showPlay();
   playState = true;
   console.log('switched to' + ' ' + playState);
  }
});


//these functions will revert back the pause/play button back to it's initial state
$('#j-traditional').click(function() {
  document.getElementById('play').style.visibility = "hidden";
  showPause();
  playState = false;
  console.log("playState reverted to initial state");
});

$('#j-rap').click(function() {
  playState = false;
  document.getElementById('play').style.visibility = "hidden";
  showPause();
  playState = false;
  console.log("playState reverted to initial state");
});

$('#j-electro').click(function() {
  playState = false;
  document.getElementById('play').style.visibility = "hidden";
  showPause();
  playState = false;
  console.log("playState reverted to initial state");
});

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
    auto_play: false,
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
    playTrack(nextIndex);
    console.log("playing J-hip-hop");
  }
  //will play the following tracks based on the button they click
  function playSong2(){
    currentIndex = 2;
    var nextIndex = currentIndex;
    playTrack(nextIndex)
    console.log("playing J-electro");
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
  //when the user clicks on the j-hip-hop button, the player will play M-flo song
  function jRap() {
    playSong1();
  }
  //when the user clicks on the j-electro button, the player will play Miku song
  function jElectroPlay() {
    playSong2();
  }

  //this will show a different description for the artist depending on which track is playing
  function descriptionForArtist() {
  if (currentIndex == 0) {
    document.getElementById("md-body").innerHTML = "Chihiro Toki <br> <img src = '/static/css/avatar.png' height='200' width='200'> <br> <p> Chihiro Toki is a japanese musician. She sings the vocals for the song 'Sakura Iro No Yume', the ending song for Deemo, a rhtyhm game developed by Rayark Games. <p>"
  }
  else if (currentIndex == 1) {
    document.getElementById("md-body").innerHTML = "Nujabes <br> <img src = '/static/css/nujabes.jpg' height='200' width='200'> <br> Nujabes was a Japanese hip-hop producer. His name, is an anagram of his name, being the reverse spelling of Seba Jun. He often incorporated jazz and hip-hop beats into his music also known as jazz rap. He is best known for producing the music for the popular anime Samurai Champloo. Sadly, in February 26, 2010, Nujabes died in an automobile-related accident."
  }
  else if (currentIndex == 2){
    document.getElementById("md-body").innerHTML = "Hatsune Miku <br> <img src = '/static/css/miku.jpg' height='200' width='200'> <br> Hatsune Miku is a humanoid persona voiced by a singing voice synthesizer application named Vocaloid. She is portrayed as a teenage girl with long turqouise twintails"
  }
}
  descriptionForArtist();

// Bind Functions to eventHandlers
// when current track is finished, soundcloud will play the next track
  widget.bind(SC.Widget.Events.FINISH, trackFinished);
// Event handlers when played on toggle
  $('#play_button').on('click', playToggle);

  $('#back_button').on('click', playPrev);

  $('#ff_button').on('click', playNext);

  $('#j-traditional').on('click', jTraditional);

  $('#j-traditional').on('click', musicInfoJpop);

  $('#j-traditional').on('click', descriptionForArtist);

  $('#j-rap').on('click', jRap);

  $('#j-rap').on('click', musicInfoJrap);

  $('#j-rap').on('click', descriptionForArtist);

  $('#j-electro').on('click', jElectroPlay);

  $('#j-electro').on('click', musicInfoJelectro);

  $('#j-electro').on('click', descriptionForArtist);


  //plays first track of array by default
  playTrack(0);


});
