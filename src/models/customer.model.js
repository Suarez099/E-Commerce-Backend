import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

sequelize.define("customer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email:{
    type: DataTypes.STRING,
    unique: true
  }
}
, {
  timestamps: true
});
