const express=require("express");

const router=express.Router();

const controller=require("../controllers/employeeController");

const announceontroller = require("../controllers/announcementController");


const {verifyToken}=require("../middleware/authMiddleware");

const {isAdmin} = require("../middleware/roleMiddleware")

router.post("/createEmployee",verifyToken,controller.createEmployee);

router.get("/fetchEmp",verifyToken,controller.getEmployees);

router.get("/fetchEmpbyid/:id",verifyToken,controller.getEmployeeById);

router.put("/updateEmp/:id",verifyToken,controller.updateEmployee);

router.delete("/deletebyid/:id",verifyToken,controller.deleteEmployee);

router.post("/createAnnounceMent",verifyToken,isAdmin,announceontroller.createAnnouncement
);

module.exports=router;