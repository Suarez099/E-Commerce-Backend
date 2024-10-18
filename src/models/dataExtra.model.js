import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { customer } from "./customer.model.js";

sequelize.define(
  "data_extra",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    adres: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

// llave forania 1 customer para 1 data_extra
customer.
