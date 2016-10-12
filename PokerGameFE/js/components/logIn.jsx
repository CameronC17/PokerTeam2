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

  },


  handleClick: function() {
    console.log(this.state.user);
    appDispatcher.dispatch({
      action: this.state.buttons.constant
    })

  },

  handlePasswordChange: function(event) {

    this.setState({username: event.target.value});
  },

  handleUsernameChange: function(event){
    this.setState({password: event.target.value});
  },



  render: function() {
    return(
      <section id='login-section'>

        <div className="form-content">
            <h1>Login to your PokerBalmz account</h1>
            <div className="form-container">

                <form className="loginform">
                  <div className="message" id="register-msg">
                  </div>
                  <div className="message" id="login-msg">
                  </div>
                    <div>
                        <input type="text" className="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handlePasswordChange} required />
                    </div>
                    <div>
                        <input type="password" id="password" className="password" placeholder="Password" value={this.state.password} onChange={this.handleUsernameChange} required />
                    </div>
                    <input type="button" value="Login" id="login-button" onClick={this.handleClick}/>
                </form>
            </div>
        </div>

    </section>
   );
  }
});

module.exports = LogIn
