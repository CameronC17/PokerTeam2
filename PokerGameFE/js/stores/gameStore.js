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




var _pCards = [
            [{ suit: 'heart', value: 9 },
            { suit: 'diamond', value: 10 }],
            [{ suit: 'heart', value: 7 },
            { suit: 'diamond', value: 10 }],
            [{ suit: 'heart', value: 5 },
            { suit: 'diamond', value: 10 }],
            [{ suit: 'heart', value: 3 },
            { suit: 'diamond', value: 10 }],
            [{ suit: 'heart', value: 2 },
            { suit: 'diamond', value: 10 }]

          ]

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
  console.log("STARTGAME");

  if (payload.action == Constants.LOGIN_ACTION) {

    axios.post()


  }



  if (payload.action == Constants.ACTION_CHECK) {

    GameStore.emit("update");
  }

  if (payload.action == Constants.START_GAME) {

    axios.post()


    PlayerCardStore.emit("update");
    TableCardStore.emit("update");
  }

}

module.exports = {
  PlayerCardStore: PlayerCardStore,
  GameStore: GameStore,
  TableCardStore: TableCardStore
}
