
const express = require('express');
const route = express.Router();
const Students = require("../model/mentor");

route.post('/add', async (req, res) => {
    try{
        const payload = req.body;

        const newStudents = new Students(payload);

        await newStudents.save((err, data)=> {
            if(err){
                return res.status(400).send({message: 'Error while adding new student. Please check the data'});
            }

            res.status(201).send({studentId: data._id, message: "Student has been added successfully." })
        })

    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});

route.get('/view', (req, res) => {
    try{
        Students.find((err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving employees. Please check the data'})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
});

route.delete('/delete/:empID', (req, res) => {
    try{
        Students.deleteOne({_id: req.params.empID}, (err, data) => {
            if(err){
                return res.status(400).send('Error while deleting an employee. Please check the data');
            }

            res.status(200).send({message : `Employee with id ${req.params.empID} has been deleted.`})
        })
    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});
route.put('/edit/:empID', (req, res) => {
    try{
        Students.findByIdAndUpdate({_id: req.params.empID}, {$set: req.body}, (err, data) =>{
            if(err){
                return res.status(400).send({message: 'Error while updating an existing user. Please check the data'})
            }

            res.status(201).send({employeeId: data._id, message: "Employee details have been updated."})
        })

    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});

route.get('/viewone/:empID', (req, res) => {
    try{
        Students.findOne({_id: req.params.empID}, (err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving an employee. Please check the data'})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
});
module.exports=route;