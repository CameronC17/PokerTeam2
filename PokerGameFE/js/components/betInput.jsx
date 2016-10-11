var BetInput = React.createClass({
  render: function() {
    return(
    <div>
      <label for="stake">Stake:</label><br/>
      <input id="option1" type="button" name="stake" value="100"/>
      edds<br/>
      <input id="option2" type="button" name="stake" value="50"/>
      edds<br/>
      <input id="option3" type="button" name="stake" value="20"/>
      edds<br/>
      <input id="stake" type="number" name="stake" placeholder="Stake" required/><br/>
    </div>)

  }

});

module.exports = BetInput
