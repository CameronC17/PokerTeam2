var Game = React.createClass({

  render: function() {
    return(
      <section id='game-section'>
      <div id="game-msg">

      </div>

        <div className="game">
            <div className="wallet">
                <input type="text" name="wallet" placeholder="Wallet" readonly /><br/>
            </div>
            <div className="table">
                <table>
                    <tr className="top">
                        <td id="top-left">
                        </td>
                        <td id="top-middle">
                          <div className="deck">
                          <div className="deck-card">
                            <div className="edds">
                              <p id="eddValue">50</p>
                            </div>
                          </div>
                        </div>
                        </td>
                        <td id="top-right">
                        </td>
                    </tr>
                    <tr className="bottom">
                        <td id="bottom-left">
                        </td>
                        <td id="bottom-middle">

                        </td>
                        <td id="bottom-right">

                        </td>
                    </tr>
                </table>

            </div>
            <div className="seat" id="seat1">
            </div>
            <div className="seat" id="seat2">
            </div>
            <div className="seat" id="seat3">
            </div>
            <div className="seat" id="seat4">
            </div>
            <div className="seat" id="seat5">
            </div>
            <div className="gamecontent">
                <div className="singlemultiplayer">
                    <button type="button" id="single">Single</button>
                    <button type="button" id="multiplayer">Multiplayer</button>
                </div>

                <div id="gamebuttons">
                    <label for="stake">Stake:</label><br/>
                    <input id="option1" type="button" name="stake" value="100" /> edds<br/>
                    <input id="option2" type="button" name="stake" value="50" /> edds<br/>
                    <input id="option3" type="button" name="stake" value="20" /> edds<br/>
                    <input id="stake" type="number" name="stake" placeholder="Stake" required /><br/>
                    <button type="button" id="check">Check</button>
                    <button type="button" id="fold">Fold</button>
                    <button type="button" id="bet">Bet</button>
                    <button type="button" id="call">Call</button>
                    <button type="button" id="start">Start</button>
                </div>
            </div>
        </div>
    </section>


    )
  }
});

module.exports = Game
