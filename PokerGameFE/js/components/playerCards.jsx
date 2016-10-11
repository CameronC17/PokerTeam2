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
    console.log(this.state.playerCards)

    return(
      <div>
        <Card suits={this.state.playerCards[0].suit} value={this.state.playerCards[0].value}/>
        <Card suits={this.state.playerCards[1].suit} value={this.state.playerCards[1].value}/>
      </div>
    )
  }
})

module.exports = PlayerCards;
