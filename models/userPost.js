const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our userPost model
class userPost extends Model {}

// create fields/columns for userPost model
userPost.init(
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
      userpost_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      date_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
  
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'userpost'
    }
  );

  module.exports = userPost;