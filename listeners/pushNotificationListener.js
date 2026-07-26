const eventEmitter = require("../events/eventEmitter");

const { Employee } = require("../models");

const pushService = require("../services/pushNotificationService");

eventEmitter.on(
    "announcementCreated",
    async (announcement) => {

        console.log("Push Notification Listener Started");

        try {

            const employees = await Employee.findAll({

                where: {

                    status: "Active"

                }

            });

            for (const employee of employees) {

                await pushService.sendPushNotification(

                    employee,

                    announcement

                );

            }

            console.log("All Push Notifications Sent");

        } catch (error) {

            console.log(error.message);

        }

    }
);