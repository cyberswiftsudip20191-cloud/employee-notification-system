const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const { verifyToken }=require("../middleware/authMiddleware");

const { isAdmin }=require("../middleware/roleMiddleware");

const {
    registerUser,
    getUsers
} = require("../controllers/userController");

router.post(
    "/register",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid Email"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters")
    ],
    registerUser
);

router.get("/", verifyToken, isAdmin, getUsers);

module.exports = router;