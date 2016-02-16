var React = require('react');
var Event = require('./event');

module.exports = React.createClass({
  render: function() {
    //Creates a list for the data for use in react
        var list = this.props.eventData.map(function(eventProps){
          return <Event {...eventProps} />
        });

        return <div>
          {list}
        </div>
      }
    });
