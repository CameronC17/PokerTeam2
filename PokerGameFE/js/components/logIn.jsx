var LogIn = React.createClass({

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
                        <input type="text" className="username" id="username" placeholder="Username" required />
                    </div>
                    <div>
                        <input type="password" id="password" className="password" placeholder="Password" required />
                    </div>
                    <input type="button" value="Login" id="login-button" />
                </form>
            </div>
        </div>

    </section>
   );
  }
});

module.exports = LogIn
