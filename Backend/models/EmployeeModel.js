const mongoose = require('mongoose');

const employeesSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    Position: String,
    EmployeeId: {
        type: String,
        unique: true
    },
    Department: String
});

const EmployeesModel = mongoose.model("Employees_Info", employeesSchema);

module.exports = EmployeesModel;