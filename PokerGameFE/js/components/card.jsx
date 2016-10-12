
var Card = React.createClass({



  render: function() {
    var suit = "";
    var color = "";
    var value = "";
    switch(this.props.suits){
      case "diamond":
        suit = "\u2666";
        color = "red"
        break;
      case "heart":
        suit = "\u2665";
        color = "red"
        break;
      case "spade":
        suit = "\u2660";
        color = "black"
        break;
      case "club":
        suit = "\u2663";
        color = "black"
        break;
    };
    switch(this.props.value){
      case 14:
        value = "A";
        break;
      case 13:
        value = "K"
        break;
      case 12:
        value = "Q";
        break;
      case 11:
        value = "J";
        break;
      default:
        value = this.props.value;
        break;
    };

    return (
      <div className="card" id={color}>
        <p className={this.props.suits}>{suit}</p>
        <p className="cardtype">
          {value}
        </p>
        <p className="upsidedown suit">
          {suit}
        </p>
      </div>
    )
  }

})

module.exports = Card;
