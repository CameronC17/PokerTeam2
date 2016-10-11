var BetInput = require("./betInput.jsx");
var CommandButtons = require("./commandButtons.jsx");

var GameForm = React.createClass({
  render:function(){
    return (
      <div id="gamebuttons">
        <BetInput />
        <CommandButtons />
      </div>
    );
  }
});

module.exports = GameForm
