jQuery(function($) {
  //Asynchronously Load the map api
  var script = document.createElement('script');
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
});

  var map;
//creates the map through the function initMap
function initMap() {
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(),
    mapTypeId: 'roadmap'
  };

  //Display a map on the page for SF
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  // map.setTilt(45);

  //using json for new data
  var json =
  [
    { "id": 1,
     "title":"Miku Expo",
      "description":"Watch Hatsune Miku Live in Concert",
      "city":"SF",
      "longitude": 37.7826598,
      "latitude": -122.410181},
    { "id": 2,
      "title":"J-pop Summit",
      "description":"Come join various artists from Japan perform live at J-POP Summit 2016!",
      "city":"SF",
      "longitude": 37.806815,
      "latitude": -122.4314908},
    { "id": 3,
      "title":"Gazette World Tour",
      "description":"Come see the popular Japanese metal band, Gazette perform live in the SF Bay Area!",
      "city":"SF",
      "longitude": 37.7877515,
      "latitude": -122.4214273},
    // { "id": 4,
    //   "title":"KPP 5IVE YEARS MONSTER WORLD TOUR 2016",
    //   "description":"See International pop star, Kyary Pamyu Pamyu live in New York!",
    //   "city":"NY",
    //   "longitude": "40.7578505",
    //   "latitude": "-73.9866898"},
    // { "id": 5,
    //   "title":"Waku Waku + NYC",
    //   "description":"Attend Waku Waku a japanese pop culture festival in New York. Waku Waku +NYC brings together the worlds of anime, manga, music, food, film, and fashion inside Brooklyn’s Greenpoint and Williamsburg neighborhoods.",
    //   "city":"NY",
    //   "longitude": "40.7281692",
    //   "latitude": "-73.9578117"},
    // { "id": 6,
    //   "title":"Anime Expo 2016",
    //   "description":"Attend the largest Anime convention in Northern California. Anisong Artist MICHI will be the special music guest for this year.",
    //   "city":"LA",
    //   "longitude": "34.0402652",
    //   "latitude": "-118.2695439"},
  ];

  //Multiple Markers for SF locations
  var markers = [
    ['Miku Expo, Warfield', 37.7826598,-122.410181],
    ['J-Pop Summit, ', 37.806815, -122.4314908],
    ['Gazette World Tour, ', 37.7877515, -122.4214273],
    ['KPP 5IVE YEARS MONSTER WORLD TOUR 2016, ', 40.7578505, -73.9866898],
    ['Waku Waku + NYC, ', 40.7281692, -73.9578117],
    ['Anime Expo 2016 , ', 34.0402652, -118.2695439]
  ];

  //Info Window Content
  var infoWindowContent = [
  ['<div class="info_content">' +
  '<h3>Miku Expo</h3>' +
  '<p> Watch Hatsune Miku Live in Concert</p>' + '</div>'],
  ['<div class="info_content">' +
  '<h3>J-Pop Summit</h3>' +
  '<p> Come join various artists from Japan perform live at J-POP Summit 2016!</p>' + '</div>'],
  ['<div class="info_content">' +
  '<h3>Gazette World Tour</h3>' +
  '<p> Come see the popular Japanese metal band, Gazette perform live in the SF Bay Area!</p>' + '</div>']
];

  // Display multiple markers on a map for SF
  var infoWindow = new google.maps.InfoWindow(), marker, i;


  // Loops through the json and place a marker on the map
  for ( i = 0; i < json.length; i++){
  //create an object based on our json data
    var obj = json[i];
  //Adding a marker for each location based on our json
    position = new google.maps.LatLng(obj.latitude, obj.longitude);
    console.log(obj.latitude);
    marker = new google.maps.Marker({
    position: position,
    map: map,
    title: obj.title
    });
  //Allow each marker to have an info window
  google.maps.event.addListener(marker, 'click', (function(marker,i) {
      return function() {
        infoWindow.setContent(infoWindowContent(obj.description));
        infoWindow.open(map, marker);
      }
    }) (marker, i));
    map.fitBounds(bounds);
  }


  // Loop through our array of markers & place each one on the map
  //   for( i = 0; i < markers.length; i++ ) {
  //        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
  //        bounds.extend(position);
  //        marker = new google.maps.Marker({
  //            position: position,
  //            map: map,
  //            title: markers[i][0]
  //        });
  // // Allow each marker to have an info window
  //   google.maps.event.addListener(marker, 'click', (function(marker, i) {
  //       return function() {
  //          infoWindow.setContent(infoWindowContent[i][0]);
  //          infoWindow.open(map, marker);
  //            }
  //        })(marker, i));
  //  // Automatically center the map fitting all markers on the screen
  //    map.fitBounds(bounds);
  //    }

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    //     this.setZoom(14);
    //     google.maps.event.removeListener(boundsListener);
    // });

  }
