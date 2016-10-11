var Card = require("./card.jsx")

var TableCards = React.createClass({
  render: function(){
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
})


module.exports = TableCards
