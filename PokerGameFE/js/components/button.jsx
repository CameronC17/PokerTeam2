var appDispatcher = require('../dispatchers/appDispatcher.js');
var GameStore = require("../stores/gameStore.js");

var Button = React.createClass({


  handleClick: function() {
    appDispatcher.dispatch({
      action: this.props.constant
    });
  },

  render: function() {
    return (
      <button type="button" id={this.props.buttonId} onClick={this.handleClick}>{this.props.text}</button>

      )

  }

});

module.exports = Button
