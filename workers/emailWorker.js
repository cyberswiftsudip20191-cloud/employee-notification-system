const { Worker } = require("bullmq");

const connection = require("../config/redis");

const emailService = require("../services/emailService");

const worker = new Worker(

    "emailQueue",

    async (job) => {

        console.log("--------------------------------");

        console.log(

            "Processing Job",

            job.id

        );

        console.log(

            "Employee",

            job.data.firstName

        );

        await emailService.sendMail(

            job.data

        );

        console.log(

            "Email Sent Successfully"

        );

    },

    {

        connection

    }

);

worker.on(

    "completed",

    job => {

        console.log(

            `Job ${job.id} Completed`

        );

    }

);

worker.on(

    "failed",

    (job,error)=>{

        console.log(

            `Job ${job.id} Failed`

        );

        console.log(error.message);

    }

);