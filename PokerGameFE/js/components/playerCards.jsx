var Card = require("./card.jsx")
var GameStore = require("../stores/gameStore.js")

var PlayerCards = React.createClass({

  getInitialState: function(){
    var card = GameStore.PlayerCardStore.getPCards(this.props.index)
    return {
      playerCards: card
    }
  },

  componentDidMount: function(){
    GameStore.PlayerCardStore.on('update', this.handleUpdate)
  },

  handleUpdate: function(){

    this.setState({
      playerCards: GameStore.PlayerCardStore.getPCards(this.props.index)
    })


  },

  render: function(){
    var cards = []
    if(this.state.playerCards != null){
      cards.push(<Card suits={this.state.playerCards[0].suit} value={this.state.playerCards[0].value}/>)
      cards.push(<Card suits={this.state.playerCards[1].suit} value={this.state.playerCards[1].value}/>)
    }
      return(
        <div>
          {cards}
        </div>

    )
  }
})

module.exports = PlayerCards;
