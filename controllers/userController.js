const { User } = require("../models");
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

exports.registerUser = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({

                success: false,

                errors: errors.array()

            });

        }

        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({

            where: {

                email

            }

        });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "Email already exists"

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({

            name,

            email,

            password: hashedPassword,

            role

        });

        res.status(201).json({

            success: true,

            message: "User Registered Successfully",

            data: {

                id: user.id,

                name: user.name,

                email: user.email,

                role: user.role

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

exports.getUsers = async (req, res) => {

    try {

        const users = await User.findAll();

        res.json({

            success: true,

            data: users

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};