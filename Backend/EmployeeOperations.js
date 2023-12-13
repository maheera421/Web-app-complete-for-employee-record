const EmployeesModel = require("./models/EmployeesModel");

const createEmployee = async (FirstName, LastName, Position, EmployeeId, Department) => {
    console.log("Running Successfully!");
    let employee = new EmployeesModel();
    employee.FirstName = FirstName;
    employee.LastName = LastName;
    employee.Position = Position;
    employee.EmployeeId = EmployeeId;
    employee.Department = Department;
    await employee.save();
    return employee;
};

const getAllEmployees = async () => {
    let employees = await EmployeesModel.find();
    return employees;
}

const getOneEmployee = async (_id) => {
    let oneEmployee = await EmployeesModel.findById(_id)
    return oneEmployee;
}

const deleteEmployee = async (_id) => {
    let employee = await EmployeesModel.findByIdAndDelete(_id);
    return employee;
};

const updateEmployee = async (_id, FirstName, LastName, Position, EmployeeId, Department) => {
    let employee = await EmployeesModel.findById(_id);
    employee.FirstName = FirstName;
    employee.LastName = LastName;
    employee.Position = Position;
    employee.EmployeeId = EmployeeId;
    employee.Department = Department;
    await employee.save();
    return employee;
};

module.exports.createEmployee = createEmployee;
module.exports.getAllEmployees = getAllEmployees;
module.exports.getOneEmployee = getOneEmployee;
module.exports.deleteEmployee = deleteEmployee;
module.exports.updateEmployee = updateEmployee;