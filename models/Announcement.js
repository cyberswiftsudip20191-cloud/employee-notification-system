const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Announcement = sequelize.define(
    "Announcement",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "announcements",
        timestamps: true
    }
);

module.exports = Announcement;