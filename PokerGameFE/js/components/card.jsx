
var Card = React.createClass({

  render: function() {
    return (
      <div className="card" id="red">
        <p className={this.props.suit}>{this.props.suit}</p>
        <p className="cardtype">
          {this.props.value}
        </p>
        <p className="upsidedown suit">
          {this.props.suit}
        </p>
      </div>
    )
  }

})

module.exports = Card;
