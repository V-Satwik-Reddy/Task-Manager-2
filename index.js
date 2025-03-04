const express=require('express');
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const Task=require('./task');

//middleware
app.use(express.json());
app.use(morgan("dev"));

app.get('/',(req,res)=>{
    res.send("Welcome to my Express App");
});

//show all tasks
app.get("/tasks",async (req,res)=>{
    const tasks= await Task.find();
    res.send(tasks);
});

//show a task by id 
app.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findOne({id:Number(req.params.id)});
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//add a task
app.post("/tasks",async (req,res)=>{
    try {
        const task=new Task({
            id:req.body.id,
            title:req.body.title,
            description:req.body.description
        });
        await task.save();
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//update a task @put
app.put("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findOne({id:Number(req.params.id)});
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        await Task.updateOne({id:Number(req.params.id)},req.body);
        res.json(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//delete a task 
app.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findOne({id:Number(req.params.id)});
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        await Task.deleteOne({id:Number(req.params.id)});
        res.json({ message: "Task deleted", task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});
