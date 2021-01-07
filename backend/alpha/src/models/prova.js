'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prova extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  Prova.init({
    id_processo: DataTypes.INTEGER,
    qtdQuestoes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prova',
  });
  return Prova;
};