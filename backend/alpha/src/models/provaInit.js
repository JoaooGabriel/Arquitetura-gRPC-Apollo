'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProvaInit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  ProvaInit.init({
    id_prova: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    qtdAcertos: DataTypes.INTEGER,
    iniciada: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'ProvaInit',
  });
  return ProvaInit;
};