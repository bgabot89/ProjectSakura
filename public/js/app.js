SC.initialize({
  client_id: 'ced46db7be1e678d369f554b27aded8a'
});

var track_url = "https://soundcloud.com/bchan-234803630/sakura-iro-no-yume";
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
	console.log('oEmbed response: ', oEmbed);
});

$(document).ready(function(){
	console.log('works');
});
