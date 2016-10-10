var NavBar = require("./components/navBar.jsx")
var LogIn = require("./components/logIn.jsx")
var Game = require("./components/game.jsx")

ReactDOM.render(
  <div>
    <NavBar />
    <LogIn />
    <Game />
  </div>,
  document.getElementById('container')
);
