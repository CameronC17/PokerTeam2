import {Router, Route, IndexRoute, hashHistory} from "react-router";

var NavBar = require("./components/navBar.jsx")
var LogIn = require("./components/logIn.jsx")
var Game = require("./components/game.jsx")

ReactDOM.render(

  <Router history={hashHistory}>
    <div>

      <NavBar/>
      <LogIn/>
      <Game/>
    </div>,
  </Router>
document.getElementById('container'));
