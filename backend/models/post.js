const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init(
  {
    title: { type: DataTypes.STRING, allowNull: false, required: true },
    description: { type: DataTypes.STRING, allowNull: false, required: true },
    image: { type: DataTypes.STRING, allowNull: false, required: true },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "id",
      },
    },
    likes: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Post",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
