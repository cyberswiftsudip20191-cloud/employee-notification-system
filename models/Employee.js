const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employee = sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        employeeCode: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            unique: true
        },

        mobile: {
            type: DataTypes.STRING
        },

        department: {
            type: DataTypes.STRING
        },

        designation: {
            type: DataTypes.STRING
        },

        salary: {
            type: DataTypes.DECIMAL(10,2)
        },

        status: {
            type: DataTypes.ENUM(
                "Active",
                "Inactive"
            ),
            defaultValue:"Active"
        }

    },
    {
        tableName:"employees",

        timestamps:true,

        paranoid:true
    }
);

module.exports=Employee;