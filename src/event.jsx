var React = require('react');
// Define a `class` in this class Event
module.exports = React.createClass({
  // Define our render method.  The render method is the only required method
  // in a React component.
  render: function() {
    // Return a snippet of JSX consisting of a button and a span.
    return <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
          <div className="caption">
            <h3> {this.props.title} </h3>
            <ul>
            <ol>
            <p>{this.props.description}</p>
            <p>{this.props.date}</p>
            </ol>
            </ul>
          </div>
        </div>
    </div>
  }
});
