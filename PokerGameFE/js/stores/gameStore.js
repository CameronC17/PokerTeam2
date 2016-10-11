var appDispatcher = require('../dispatchers/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Constants = require('../constants/constants.js');

var _game = {
};

var GameStore = merge(EventEmitter.prototype, {
  getGame: function() {
    return _game;
  }
});

appDispatcher.register(handleAction);

function handleAction(payload) {
// if startgame, do an api call to /api/start
  console.log("STARTGAME");
  GameStore.emit("update");
}

module.exports = GameStore;
