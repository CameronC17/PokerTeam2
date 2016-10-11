var GameForm = require("./gameForm.jsx");

var Game = React.createClass({

  render: function() {
    return (
      <div>
        <section id='game-section'>
          <div id="game-msg"></div>

          <div className="game">
            <div className="wallet">
              <input type="text" name="wallet" placeholder="Wallet" readonly/><br/>
            </div>
            <div className="table">
              <table>
                <tr className="top">
                  <td id="top-left"></td>
                  <td id="top-middle">
                    <div className="deck">
                      <div className="deck-card">
                        <div className="edds">
                          <p id="eddValue">50</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td id="top-right"></td>
                </tr>
                <tr className="bottom">
                  <td id="bottom-left"></td>
                  <td id="bottom-middle"></td>
                  <td id="bottom-right"></td>
                </tr>
              </table>

            </div>
            <div className="seat" id="seat1"></div>
            <div className="seat" id="seat2"></div>
            <div className="seat" id="seat3"></div>
            <div className="seat" id="seat4"></div>
            <div className="seat" id="seat5"></div>
            <div className="gamecontent">


            </div>
            <GameForm />
          </div>
        </section>
      </div>


    )
  }
});

module.exports = Game
