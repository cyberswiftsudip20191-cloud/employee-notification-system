const express = require("express");

//require("./listeners/notificationListener");
require("./listeners/pushNotificationListener");
require("./listeners/emailListener");

const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees",require("./routes/employeeRoutes"));

app.get("/", (req, res) => {

    res.json({

        message: "API Running"

    });

});

module.exports = app;