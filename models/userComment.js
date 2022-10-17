const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userComment extends Model {}

userComment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'userpost',
          key: 'id'
        }
      },
      usercomment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      }
     
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'usercomment'
  }
);

module.exports = userComment;