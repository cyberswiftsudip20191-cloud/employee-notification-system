const { Announcement } = require("../models");
const eventEmitter = require("../events/eventEmitter");

exports.createAnnouncement = async (req, res) => {

    try {

        const announcement = await Announcement.create({

            title: req.body.title,

            message: req.body.message,

            createdBy: req.user.id

        });

        console.log("Announcement Saved");

        eventEmitter.emit(
            "announcementCreated",
            announcement
        );

        res.status(201).json({

            success: true,

            message: "Announcement Created",

            data: announcement

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};