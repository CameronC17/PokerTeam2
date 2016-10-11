var Card = require("./card.jsx")

var PlayerCards = React.createClass({
  render: function(){
    return(
      <div>
        <Card />
        <Card />
      </div>  
    )
  }
})

module.exports = PlayerCards;
