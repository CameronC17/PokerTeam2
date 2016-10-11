import {Router, Route, IndexRoute, hashHistory} from "react-router";

var Layout = require("./components/layout.jsx")
var LogIn = require("./components/logIn.jsx")
var Game = require("./components/game.jsx")
var Home = require("./components/home.jsx")
ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="game" component={Game}></Route>
      <Route path="login" component={LogIn}></Route>
    </Route>
  </Router>,
document.getElementById('container'));
