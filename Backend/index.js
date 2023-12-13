const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    deleteEmployee,
    updateEmployee
} = require("./employeesController");

app.use(express.json());

let database = mongoose.connect("mongodb://localhost:27017/Company");

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/api/employees', function (req, res) {
    database.then(async () => {
        let employees = await getAllEmployees();
        res.send(employees);
    })
})

app.get('/api/employees/:index', function (req, res) {
    database.then(async () => {

        if (!getOneEmployee) {
            res.status(400).send("Employee Not Found");
        }
        let oneEmployee = await getOneEmployee(req.params.index)
        res.send(oneEmployee);
    })
})

app.put('/api/employees/:index', function (req, res) {
    database.then(async () => {
        let upEmployee = await updateEmployee(req.params.index, req.body.FirstName, req.body.LastName, req.body.Position, req.body.EmployeeId, req.body.Department);
        res.send(upEmployee);
    })

})

app.delete('/api/employees/:index', function (req, res) {
    database.then(async () => {
        let delEmployee = await deleteEmployee(req.params.index);
        res.send(delEmployee);
    })
})

app.post('/api/employees', function (req, res) {
    database.then(async () => {
        let newEmployee = await createEmployee(req.body.FirstName, req.body.LastName, req.body.Position, req.body.EmployeeId, req.body.Department)
        res.send(newEmployee);
    })
})

database.catch((err) => {
    console.log("Error Connecting " + err);
})

app.listen(3030)