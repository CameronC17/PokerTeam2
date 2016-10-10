
var Home = React.createClass({
  render: function() {
    return (
      <div>
        <section id='homepage-section'>
          <div class="home-content">
            <h1>PokerBalmz</h1>
            <p id="textContent">
              PokerBalmz is a Poker company named after its founder Ed Balm.
            </p><br/>
            <p id="textContent">
              Balm so hard people want to fine me.
            </p>
            <div class="img">
              <img src="img/pokerimage.jpg" alt="Poker Image" id="homepageimage"/>
            </div>
          </div>
        </section>
      </div>
    )
  }
})

module.exports = Home
