var React = require('react');
var Eventlist = require('./eventList');

// Initial setup options provided to the list componenet
  var options = {
    eventData:  [{
    title: 'Miku Expo',
    description: 'Watch Hatsune Miku Live in Concert',
    date: '03/3/16'
  },{
    title: 'J-POP Summit 2016',
    description: 'Come join various artists from Japan perform live at J-POP Summit 2016!',
    date: '07/22/16 - 07/24/16'
  }, {
    title: 'Gazette World Tour 2016',
    description: 'Come see the popular Japanese metal band, Gazette perform live in the SF Bay Area!',
    date: '05/1/16'
  }]
};

var element = React.createElement(Eventlist, options);
React.render(element, document.querySelector('.row'));
