const { Employee } = require("../models");

exports.createEmployee = async (req,res)=>{

try{

const employee=await Employee.create(req.body);

res.status(201).json({

success:true,

data:employee

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

}

exports.getEmployees=async(req,res)=>{

const employees=await Employee.findAll();

res.json({

success:true,

data:employees

});

}

exports.getEmployeeById=async(req,res)=>{

const employee=await Employee.findByPk(

req.params.id

);

if(!employee){

return res.status(404).json({

message:"Employee Not Found"

});

}

res.json(employee);

}


exports.updateEmployee=async(req,res)=>{

const employee=await Employee.findByPk(

req.params.id

);

if(!employee){

return res.status(404).json({

message:"Employee Not Found"

});

}

await employee.update(req.body);

res.json({

success:true,

data:employee

});

}


exports.deleteEmployee=async(req,res)=>{

const employee=await Employee.findByPk(

req.params.id

);

if(!employee){

return res.status(404).json({

message:"Employee Not Found"

});

}

await employee.destroy();

res.json({

success:true,

message:"Employee Deleted"

});

}