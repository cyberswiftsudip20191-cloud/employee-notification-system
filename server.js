require("dotenv").config();

const app = require("./app");
require("./workers/emailWorker");

const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

async function startServer() {

    try {

        await sequelize.authenticate();

        console.log("✅ Database Connected");

        await sequelize.sync();

        console.log("✅ Database Synced");

        app.listen(PORT, () => {

            console.log(`🚀 Server Running on ${PORT}`);

        });

    }

    catch (error) {

        console.log(error);

    }

}

startServer();