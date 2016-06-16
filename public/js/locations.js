var map;
function initMap() {
    var infowindow = new google.maps.InfoWindow();
    var mapOptions = {
        center: new google.maps.LatLng(37.80, -122.41),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var json = {
      "concerts": [
      {
        "title": "Miku Expo",
        "description":"Watch Hatsune Miku Live in Concert",
        "city":"SF",
        "date": '03/3/16',
        "lat": 37.7826598,
        "lng": -122.410181},
      {
        "title": "J-pop Summit",
        "description":"Come join various artists from Japan perform live at J-POP Summit 2016!",
        "city":"SF",
        "date": '07/22/16 - 07/24/16',
        "lat": 37.806815,
        "lng": -122.4314908},
      {
        "title": "Gazette World Tour",
        "description":"Come see the popular Japanese metal band, Gazette perform live in the SF Bay Area!",
        "city":"SF",
        "date": '05/1/16',
        "lat": 37.7877515,
        "lng": -122.4214273},
      {
        "title": "KPP 5IVE YEARS MONSTER WORLD TOUR 2016",
        "description":"See International pop star, Kyary Pamyu Pamyu live in New York!",
        "city":"NY",
        "date": '07/25/16',
        "lat": 40.7578505,
        "lng": -73.9866898},
      {
        "title": "Waku Waku + NYC",
        "description":"Attend Waku Waku a japanese pop culture festival in New York. Waku Waku +NYC brings together the worlds of anime, manga, music, food, film, and fashion inside Brooklyn’s Greenpoint and Williamsburg neighborhoods.",
        "city":"NY",
        "date": '08/29/16 - 08/30/16',
        "lat": 40.7281692,
        "lng": -73.9578117},
      {
        "title": "Anime Expo 2016",
        "description":"Attend the largest Anime convention in Northern California. Anisong Artist MICHI will be the special music guest for this year.",
        "city":"LA",
        "date": '07/1/16 - 07/4/16',
        "lat": 34.0402652,
        "lng": -118.2695439},
      ]
    };

    $.each(json.concerts, function(key,data) {
      var LatLng = new google.maps.LatLng(data.lat, data.lng);

      var marker = new google.maps.Marker({
        position: LatLng,
        animation: google.maps.Animation.DROP,
        map :map,
        title: data.title
      });

      var details = data.title + ", " + data.description + ".";

      bindInfoWindow(marker, map, infowindow, details);
      SF();
      NY();
      LA();
    });
  }

  function bindInfoWindow(marker, map, infowindow, strDescription){
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent(strDescription);
      infowindow.open(map, marker);
    });
  }

  function newLocation(newLat, newLng){
      map.setCenter({
        lat: newLat,
        lng: newLng
      });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  function SF(){
    $('#sf').on('click', function ()
    {
      newLocation(37.80,-122.41);
      console.log('clicked');
    });
  }

  function NY(){
    $('#ny').on('click', function ()
    {
      newLocation(40.75,-73.99);
    });
  }
  function LA(){
    $('#la').on('click', function ()
    {
      newLocation(34.0402652,-118.2695439);
    });
  }
