const transporter = require("../config/mail");

exports.sendMail = async (data) => {

    await transporter.sendMail({

        from: process.env.EMAIL_FROM,

        to: data.email,

        subject: data.title,

        html: `

        <h2>Hello ${data.firstName}</h2>

        <p>${data.message}</p>

        <br>

        <strong>Employee Notification System</strong>

        `

    });

};