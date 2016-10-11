var GameForm = require("./gameForm.jsx");

var Table = require("./table.jsx")


var Game = React.createClass({

  render: function() {
    return (
      <div>
        <section id='game-section'>
          <div id="game-msg"></div>
            <Table />


            <div className="gamecontent">



            </div>
            <GameForm />

        </section>
      </div>


    )
  }
});

module.exports = Game
