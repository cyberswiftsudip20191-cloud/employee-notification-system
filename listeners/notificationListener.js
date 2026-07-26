const eventEmitter=require("../events/eventEmitter");

const {Employee}=require("../models");

const emailService=require("../services/emailService");

eventEmitter.on(

"announcementCreated",

async(announcement)=>{

console.log("Announcement Event Received");

const employees=await Employee.findAll({

where:{

status:"Active"

}

});

console.log(

`${employees.length} Employees Found`

);

for(const employee of employees){

await emailService.sendMail(

employee,

announcement

);

}

console.log(

"All Emails Sent Successfully"

);

});