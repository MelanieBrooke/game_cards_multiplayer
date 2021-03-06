const cards = require('./cards.js');
const {alphabetDeck, catanDevelopmentDeck} = require('./decks.js');

const users = {};

const resetUsers = () => {
  for (var userName in users) {
    users[userName] = {
      sheep: 0,
      lumber: 0,
      brick: 0,
      wheat: 0,
      ore: 0
    };
  }
}

const addUser = (userName) => {
  users[userName] = {
    sheep: 0,
    lumber: 0,
    brick: 0,
    wheat: 0,
    ore: 0
  }
}

const addDeck = (user, deck) => {
  if (!users[user][deck]) {
    users[user][deck] = [];
  }
}

const addCard = (name, card, deck='catanDevelopmentDeck') => {
  if (!users[name]) {
    addUser(name);
  }
  if (!users[name][deck]) {
    users[name][deck] = [];
  }
  users[name][deck].push(card);
}

const removeCard = (name, card, deck='catanDevelopmentDeck') => {
  var cardIndex = users[name][deck].indexOf(card);
  users[name][deck].splice(cardIndex, 1);
}

module.exports = {
  users,
  addUser,
  addCard,
  removeCard,
  addDeck,
  resetUsers
}