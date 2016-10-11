var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');
var Routes = require('./index.jsx')
var _users = [
  {
    username:"josh",
    password:"password"
  }
]


appDispatcher.register(handleLogin);

function handleLogin(payload){
  if(payload.action == Constants.LOGIN_ACTION){
    for (var i = 0; i < _users.length; i++){
      console.log(payload.user, _users[i])
      if(payload.users.username == _users[i].username && payload.user.password == _users[i].password){

      }
    }
  }

}
