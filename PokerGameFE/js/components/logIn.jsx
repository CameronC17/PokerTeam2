import {Link} from "react-router";
var GameStore = require("../stores/gameStore.js")
var Constants = require("../constants/constants.js");
var appDispatcher = require("../dispatchers/appDispatcher.js");

var LogIn = React.createClass({

  getInitialState: function() {
    return {

      user: {
        username: "",
        password: ""
      },
      buttons: {
        text: "login",
        constant: Constants.LOGIN_ACTION
      }

    }
  },

  componentDidMount: function() {
    GameStore.on("update", this.handleUpdate)
  },

  handleClick: function() {
    appDispatcher.dispatch({action: this.state.buttons.constant, user: this.state.user})

  },

  handleUsernameChange: function(event) {
    this.setState({
      user: {
        username: event.target.value,
        password: this.state.user.password
      }
    });
  },

  handlePasswordChange: function(event) {

    this.setState({
      user: {
        username: this.state.user.username,
        password: event.target.value
      }
    });
  },


  render: function() {
    return (
      <section id='login-section'>

        <div className="form-content">
          <h1>Login to your PokerBalmz account</h1>
          <div className="form-container">

            <form className="loginform">
              <div className="message" id="register-msg"></div>
              <div className="message" id="login-msg"></div>
              <div>
                <input type="text" className="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} required/>
              </div>
              <div>
                <input type="password" id="password" className="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required/>
              </div>
              <Link to='/'><input type="button" value="Login" id="login-button" onClick={this.handleClick}/></Link>
            </form>
          </div>
        </div>

      </section>
    );
  }
});

module.exports = LogIn
