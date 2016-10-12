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
    console.log(this.state.tableCards);
    return (
      <div>
        <Card suits={this.state.tableCards[0].suit} value={this.state.tableCards[0].value}/>
        <Card suits={this.state.tableCards[1].suit} value={this.state.tableCards[1].value}/>
        <Card suits={this.state.tableCards[2].suit} value={this.state.tableCards[2].value}/>
        <Card suits={this.state.tableCards[3].suit} value={this.state.tableCards[3].value}/>
        <Card suits={this.state.tableCards[4].suit} value={this.state.tableCards[4].value}/>
      </div>
    )
  }
})


module.exports = TableCards
