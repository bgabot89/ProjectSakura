var React = require('react');
var Eventlist = require('./eventList');

// Initial setup options provided to the list componenet
  var options = {
    eventData:  [{
    title: 'Miku Expo',
    description: 'Watch Hatsune Miku Live in Concert',
    date: '03/3/16',
    address: '982 Market St, San Francisco, CA 94102'
  },{
    title: 'J-POP Summit 2016',
    description: 'Come join various artists from Japan perform live at J-POP Summit 2016!',
    date: '07/22/16 - 07/24/16',
    address: '2 Marina Blvd, San Francisco, CA 94123'
  }, {
    title: 'Gazette World Tour',
    description: 'Come see the popular Japanese metal band, Gazette perform live in the SF Bay Area!',
    date: '05/1/16',
    address: '1290 Sutter St, San Francisco, CA 94109'
  }, {
    title: 'KPP 5IVE YEARS MONSTER WORLD TOUR 2016',
    description: 'See International pop star, Kyary Pamyu Pamyu live in New York!',
    date: '07/25/16',
    address: '1515 Broadway at West 44th St, New York, New York 10036'
  }, {
    title: 'Waku Waku + NYC',
    description: 'Come see the popular Japanese metal band, Gazette perform live in the SF Bay Area!',
    date: '08/29/16 - 08/30/16',
    address: '72 Noble St, Brooklyn, NY 11222'
  },{
    title: 'Anime Expo 2016',
    description: 'Attend the largest Anime convention in Northern California. Anisong Artist MICHI will be the special music guest for this year.',
    date: '07/1/16 - 07/4/16',
    address: '1201 S Figueroa St, Los Angeles, CA 90015'
  }]
};

var element = React.createElement(Eventlist, options);
React.render(element, document.querySelector('.row'));
