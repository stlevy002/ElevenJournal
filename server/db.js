const Sequelize = require('sequelize');

const sequelize = new Sequelize ("postgres://postgres:6b1f7c514a3046a0b2d0310a944764f0@localhost:5432/eleven-journal");

module.exports = sequelize