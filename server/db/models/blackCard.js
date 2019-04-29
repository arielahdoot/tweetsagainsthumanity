const Sequelize = require('sequelize');
const db = require('../db');

const blackCard = db.define('blackcard', {
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

module.exports = blackCard;
