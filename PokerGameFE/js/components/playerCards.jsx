var Card = require("./card.jsx")


var PlayerCards = React.createClass({

  render: function(){
    var cards = []
    console.log("card" + this.props.cards);
    if(this.props.cards != null){
      cards.push(<Card suits={this.props.cards[0].suit} value={this.props.cards[0].value}/>)
      cards.push(<Card suits={this.props.cards[1].suit} value={this.props.cards[1].value}/>)
    }
    return(
      <div>
        {cards}
      </div>

    )
  }
})

module.exports = PlayerCards;
