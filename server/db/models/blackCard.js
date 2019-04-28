const Sequelize = require('sequelize');
const db = require('../db');

const bCard = db.define('bcard', {
  question: {
    type: Sequelize.TEXT
  },
  used: {
    type: Sequelize.BOOLEAN,
    default: false
  },
  pick: {
    type: Sequelize.INTEGER
  }
});

module.exports = bCard;
