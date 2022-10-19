const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our userPost model
class Post extends Model { }

// create fields/columns for userPost model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    date_created: {
      type: DataTypes.DATEONLY,
      defaultValue: Date.now,
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;