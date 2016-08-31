'use strict';

var Sequelize = require('sequelize');
var entities = require('./entities.json');
var databaseURI = entities[4].var;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
