var PlayerCards = require("./playerCards.jsx")
var TableCards = require("./tableCards.jsx")

var Table = React.createClass({

  render: function() {
    return (
      <div className="game">

        <div className="table">
          <table>
            <tr className="top">
              <td id="top-left"><PlayerCards /></td>
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
              <td id="top-right"><PlayerCards /> </td>
            </tr>
            <tr className="bottom">
              <td id="bottom-left"><PlayerCards /></td>
              <td id="bottom-middle"><PlayerCards /></td>
              <td id="bottom-right"><PlayerCards /></td>
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
