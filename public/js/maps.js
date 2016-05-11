jQuery(function($) {
  //Asynchronously Load the map api
  var script = document.createElement('script');
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
});

//creates the map through the function initMap
function initMap() {
  var map;
  var map2;
  var map3;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: 'roadmap'
  };

  SF();
  NY();
  LA();
  //Display a map on the page for SF
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  // map.setTilt(45);
  //Display a map on the page for NY
  map2 = new google.maps.Map(document.getElementById("map_canvas2"), mapOptions);
  map2.setTilt(45);
  //Display a map on the page for LA
  map3 = new google.maps.Map(document.getElementById("map_canvas3"), mapOptions);
  map3.setTilt(45);

  //Multiple Markers for SF locations
  var markers = [
    ['Miku Expo, Warfield', 37.7826598,-122.410181],
    ['J-Pop Summit, ', 37.806815, -122.4314908],
    ['Gazette World Tour, ', 37.7877515, -122.4214273]
  ];

  //Multiple Markers for NY locations
  var NYmarkers  = [
      ['KPP 5IVE YEARS MONSTER WORLD TOUR 2016, ', 40.7578505, -73.9866898],
      ['Waku Waku + NYC, ', 40.7281692, -73.9578117]
  ];

  //Multiple Markers for NY locations
  var LAmarkers  = [
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

  //Info Window Content for NY
  var infoWindowContentNY = [
  ['<div class="info_content">' +
  '<h3>KPP 5IVE YEARS MONSTER WORLD TOUR 2016</h3>' +
  '<p> See International pop star, Kyary Pamyu Pamyu live in New York!</p>' + '</div>'],
  ['<div class="info_content">' +
  '<h3>Waku Waku + NYC</h3>' +
  '<p> Attend Waku Waku a japanese pop culture festival in New York. Waku Waku +NYC brings together the worlds of anime, manga, music, food, film, and fashion inside Brooklyn’s Greenpoint and Williamsburg neighborhoods.</p>' + '</div>'],
  ];

  //Info Window Content for LA
  var infoWindowContentLA = [
  ['<div class="info_content">' +
  '<h3>Anime Expo 2016</h3>' +
  '<p> Attend the largest Anime convention in Northern California. Anisong Artist MICHI will be the special music guest for this year.</p>' + '</div>']
  ];

  // Display multiple markers on a map for SF
  var infoWindow = new google.maps.InfoWindow(), marker, i;

  // Display multiple markers on a map for NY
  var infoWindow2  = new google.maps.InfoWindow(), marker2, y;

  // Display multiple markers on a map for LA
  var infoWindow3  = new google.maps.InfoWindow(), marker3, z;

  // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
         var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
         bounds.extend(position);
         marker = new google.maps.Marker({
             position: position,
             map: map,
             title: markers[i][0]
         });
  // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
           infoWindow.setContent(infoWindowContent[i][0]);
           infoWindow.open(map, marker);
             }
         })(marker, i));
   // Automatically center the map fitting all markers on the screen
     map.fitBounds(bounds);
     }
     // Loop through our array of markers & place each one on the map for NY
     for( y = 0; y < NYmarkers.length; y++ ) {
          var position2 = new google.maps.LatLng(NYmarkers[y][1], NYmarkers[y][2]);
          bounds.extend(position2);
          marker2 = new google.maps.Marker({
              position: position2,
              map: map2,
              title: NYmarkers[y][0]
          });
       // Allow each marker to have an info window
       google.maps.event.addListener(marker2, 'click', (function(marker2, y) {
           return function() {
              infoWindow.setContent(infoWindowContentNY[y][0]);
              infoWindow.open(map2, marker2);
                }
            })(marker2, y));
        // Automatically center the map fitting all markers on the screen
          map2.fitBounds(bounds);
          }
          // Loop through our array of markers & place each one on the map for LA
      for( z = 0; z < LAmarkers.length; z++ ) {
         var position3 = new google.maps.LatLng(LAmarkers[z][1], LAmarkers[z][2]);
         bounds.extend(position3);
         marker3 = new google.maps.Marker({
             position: position3,
             map: map3,
             title: LAmarkers[z][0]
         });
          // Allow each marker to have an info window
            google.maps.event.addListener(marker3, 'click', (function(marker3, z) {
                return function() {
                   infoWindow.setContent(infoWindowContentLA[z][0]);
                   infoWindow.open(map3, marker3);
                     }
                 })(marker3, z));
           // Automatically center the map fitting all markers on the screen
             map3.fitBounds(bounds);
             }
  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    //     this.setZoom(14);
    //     google.maps.event.removeListener(boundsListener);
    // });

  }

  //Event Handler to render sf map when button is clicked or not
  function SF(){
    $( "#sf" ).click(function() {
      state = 'sf';
      $('#map_canvas2').hide();
      $('#map_canvas3').hide();
      $('#map_canvas').show();
      console.log(state);
      // $('#map_wrapper').toggle();
    });
  };
  //Event Handler to render ny map when button is clicked or not
  function NY(){
    $( "#ny" ).click(function() {
      state = 'ny';
      $('#map_canvas').hide();
      $('#map_canvas3').hide();
      $('#map_canvas2').show();
      console.log(state);
    });
  };

  function LA(){
    $( "#la" ).click(function() {
      state = 'ny';
      $('#map_canvas').hide();
      $('#map_canvas2').hide();
      $('#map_canvas3').show();
      console.log(state);
    });
  };
