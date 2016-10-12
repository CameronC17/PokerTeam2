var Card = require("./card.jsx")
var GameStore = require("../stores/gameStore.js")

var TableCards = React.createClass({

  getInitialState: function() {
    var card = GameStore.TableCardStore.getTCards()
    return {
      tableCards: card
    }
  },

  componentDidMount: function() {
    GameStore.TableCardStore.on("update", this.handleUpdate)
  },

  handleUpdate: function() {
    this.setState({
      tableCards: GameStore.TableCardStore.getTCards()
    })
  },

  render: function(){
    var cards = []
    //console.log(this.state.tableCards);
    if(this.state.tableCards.length > 0){
      for (var i = 0; i < this.state.tableCards.length; i++) {
        cards.push(<Card suits={this.state.tableCards[i].suit} value={this.state.tableCards[i].value} key={i}/>);
      }

    }
    return (
      <div>
        {cards}
      </div>
    )
  }
})


module.exports = TableCards
