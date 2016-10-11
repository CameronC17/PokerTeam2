var Card = React.createClass({

  render: function() {
    return (
      <div className="card" id="red">
        <p className="suit">&#9830;</p>
        <p className="cardtype">
          10
        </p>
        <p className="upsidedown suit">
          &#9830;
        </p>
      </div>
    )
  }

})

module.exports = Card;
