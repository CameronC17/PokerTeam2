var appDispatcher = require('../dispatchers/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Constants = require('../constants/constants.js');




var _tCards = [
  { suit: 'heart', value: 9 },
  { suit: 'diamond', value: 10 },
  { suit: 'heart', value: 9 },
  { suit: 'diamond', value: 10 },
  { suit: 'heart', value: 9 }
]




var _pCards = [];

var _game = {
};


var PlayerCardStore = merge(EventEmitter.prototype, {
  getPCards: function(index){
    return _pCards[index];
  }
});

var GameStore = merge(EventEmitter.prototype, {
  getGame: function() {
    return _game;
  }
});

var TableCardStore = merge(EventEmitter.prototype, {
  getTCards: function(){
    return _tCards;
  }
})

appDispatcher.register(handleAction);

function handleAction(payload) {
// if startgame, do an api call to /api/start

  if (payload.action == Constants.LOGIN_ACTION) {
      console.log(payload);
      var result= axios.post("http://localhost:3000/api/users/login", {username: payload.user.username, password: payload.user.password})
           .then(function(result){
              console.log(result.status);
              if(result.status== 200){
                window.localStorage.setItem('user', result.data.user);
                window.localStorage.setItem('username', result.data.username);
              }
              CurrentPage.emit('update');
           });
  }



  if (payload.action == Constants.ACTION_CHECK) {
    console.log("Checking")
    var userId = localStorage.getItem("user")

    axios.post("http://localhost:3000/api/games", { user: userId, bet: "false", check: "true", fold: "false", call: "false"})
      .then(function(result){
        if (result.status == 200){
          _tCards = result.data
        }
    })


    TableCardStore.emit("update");
  }

  if (payload.action == Constants.START_GAME) {
    var userId = localStorage.getItem("user")

    axios.post("http://localhost:3000/api/games/new", { user: userId})
      .then(function(result){
        if (result.status == 200){
          _pCards = result.data
        }
    })


    PlayerCardStore.emit("update");
  }



}

module.exports = {
  PlayerCardStore: PlayerCardStore,
  GameStore: GameStore,
  TableCardStore: TableCardStore
}
