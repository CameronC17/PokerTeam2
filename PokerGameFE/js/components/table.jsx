var PlayerCards = require("./playerCards.jsx")
var TableCards = require("./tableCards.jsx")
var GameStore = require("../stores/gameStore.js")


var Table = React.createClass({

  getInitialState: function(){
    var cards = GameStore.PlayerCardStore.getPCards();
    return {
      playerCards: cards
    }
  },

  componentDidMount: function(){
    GameStore.PlayerCardStore.on('update', this.handleUpdate)
  },

  handleUpdate: function(){
    this.setState({
      playerCards: GameStore.PlayerCardStore.getPCards()
    })
  },


  render: function() {
    return (
      <div className="game">

        <div className="table">
          <table>
            <tr className="top">
              <td id="top-left"><PlayerCards cards={this.state.playerCards[0]}/></td>
              <td id="top-middle">
                <TableCards />
                <div className="deck">
                  <div className="deck-card">
                    <div className="edds">
                      <p id="eddValue">50</p>
                    </div>
                  </div>
                </div>
              </td>
              <td id="top-right"><PlayerCards cards={this.state.playerCards[4]}/> </td>
            </tr>
            <tr className="bottom">
              <td id="bottom-left"><PlayerCards cards={this.state.playerCards[1]}/></td>
              <td id="bottom-middle"><PlayerCards cards={this.state.playerCards[2]}/></td>
              <td id="bottom-right"><PlayerCards cards={this.state.playerCards[3]}/></td>
            </tr>
          </table>

        </div>
        <div className="seat" id="seat1"></div>
        <div className="seat" id="seat2"></div>
        <div className="seat" id="seat3"></div>
        <div className="seat" id="seat4"></div>
        <div className="seat" id="seat5"></div>

      </div>
    )
  }

})

module.exports = Table
