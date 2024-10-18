import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const customer = sequelize.define(
  "customer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    public_id: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
