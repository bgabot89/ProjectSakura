 $(document).ready(function() {
 		 var iframeElement = document.querySelector('iframe');
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() { //when player is ready, attach an event listener
       console.log('Playing');
       widget.bind(SC.Widget.Events.PLAY, function() {
       	widget.seekTo(28000); //when played, the player will go to 28 second mark
       	widget.unbind(SC.Widget.Events.PLAY); //Remove event listener 
       });
     });
     //event listener for pause/play
     $('button').click(function() {
       widget.toggle();
     });
   });