const Sequelize = require('sequelize');

const sequelize = new Sequelize ("postgres://postgres:Corona14@localhost:5432/eleven-journal");

module.exports = sequelize