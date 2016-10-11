var CommandButtons = React.createClass({
  render: function() {
    return(
      <div id="commandButtons">
        <button type="button" id="check">Check</button>
        <button type="button" id="fold">Fold</button>
        <button type="button" id="bet">Bet</button>
        <button type="button" id="call">Call</button>
        <button type="button" id="start">Start</button>
      </div>)

  }

});

module.exports = CommandButtons
