var PlayerCards = require("./playerCards.jsx")
var TableCards = require("./tableCards.jsx")


var Table = React.createClass({


  render: function() {
    return (
      <div className="game">

        <div className="table">
          <table>
            <tr className="top">
              <td id="top-left"><PlayerCards index={0}/></td>
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
              <td id="top-right"><PlayerCards index={4}/> </td>
            </tr>
            <tr className="bottom">
              <td id="bottom-left"><PlayerCards index={1}/></td>
              <td id="bottom-middle"><PlayerCards index={2}/></td>
              <td id="bottom-right"><PlayerCards index={3}/></td>
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
