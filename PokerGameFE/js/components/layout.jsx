import {Link} from "react-router";
var Layout = React.createClass({

  render: function() {
    return (
      <div>
        <div>
          <nav className="navbar">
            <img src="img/logo.png" alt="Logo" id="logo"/>
            <div id="custom-msg"></div>
            <div id="links">
              <Link to='/' className="button" id="homepage">Home</Link>
              <a className="button" id="registerpage">Register</a>
              <Link to='login' className="button" id="loginpage">Login</Link>
              <Link to='game' className="button" id="gamepage">Game</Link>
            </div>
          </nav>
        </div>
             {this.props.children}

      </div>

    )
  }

});

module.exports = Layout
