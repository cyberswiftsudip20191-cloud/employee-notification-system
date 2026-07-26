const eventEmitter = require("../events/eventEmitter");

const emailQueue = require("../queue/emailQueue");

const { Employee } = require("../models");

eventEmitter.on(

    "announcementCreated",

    async (announcement) => {

        console.log("Email Listener Started");

        const employees = await Employee.findAll({

            where: {

                status: "Active"

            }

        });

        for (const employee of employees) {

            await emailQueue.add(

                "sendEmail",

                {

                    employeeId: employee.id,

                    email: employee.email,

                    firstName: employee.firstName,

                    title: announcement.title,

                    message: announcement.message

                },

                {

                    attempts: 3,

                    delay: 1000,

                    removeOnComplete: true,

                    removeOnFail: false

                }

            );

        }

        console.log("All Email Jobs Added");

    }

);