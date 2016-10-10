var NavBar = React.createClass({

  render: function() {
    return(

      <nav className="navbar">
          <img src="img/logo.png" alt="Logo" id="logo"/>
          <div id="custom-msg">

          </div>
          <div id="links">
              <a className="button" id="homepage">Home</a>
              <a className="button" id="registerpage">Register</a>
              <a className="button" id="loginpage">Login</a>
              <a className="button" id="gamepage">Game</a>
          </div>
      </nav>

    )
  }

});

module.exports = NavBar
