var React = require("react");

var Results = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Address:</h1>
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
});

module.exports = Results;