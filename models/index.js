const sequelize = require("../config/db");

const User = require("./User");
const Employee=require("./Employee");
const Announcement = require("./Announcement");

module.exports = {

    sequelize,

    User ,
    Employee,
    Announcement

};