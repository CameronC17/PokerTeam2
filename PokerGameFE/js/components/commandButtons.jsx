var Button = require("./button.jsx");
var appDispatcher = require("../dispatchers/appDispatcher.js");
var Constants = require("../constants/constants.js");

var CommandButtons = React.createClass({

  getInitialState: function() {
    return {
      buttons: [
        {
          text: "check",
          constant: Constants.ACTION_CHECK
        },
        {
          text: "fold",
          constant: Constants.ACTION_FOLD
        },
        {
          text: "bet",
          constant: Constants.ACTION_RAISE
        },
        {
          text: "call",
          constant: Constants.ACTION_CALL
        },
        {
          text: "start",
          constant: Constants.START_GAME
        }
      ]
    }
  },

  handleClick: function() {
    appDispatcher.dispatch({
     action: Constants.START_GAME,
     product: this.props.product
   });
 },

  render: function() {
      var buttons = this.state.buttons.map(function(btn, i) {
        return (<Button constant={btn.constant} text={btn.text} buttonId={i} key={i} />)
      });

      return (
        <div id="commandButtons">
          {buttons}
        </div>
      )
  }
});

module.exports = CommandButtons
