'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.hasMany(models.Image, {
        foreignKey: 'userId'
      });
      Hero.belongsToMany(models.Superpower, {
        through: 'heros_to_superpowers',
        foreignKey: 'heroId'
      });
    }
  }
  Hero.init({
    nickName: {
      field: 'nick_name',
      type: DataTypes.STRING,
      allowNull:false
    },
    realName: {
      field: 'real_name',
      type: DataTypes.STRING,
      allowNull:false
    },
    originDescription: {
      field: 'origin_descriprion',
      type: DataTypes.STRING
    },
    catchPhrase: {
      field: 'catch_phrase',
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heros',
    underscored: true
  });
  return Hero;
};