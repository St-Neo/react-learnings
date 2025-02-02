const express= require("express");
const app=express();
const {createTodo,updateTodo}=require("./types.js");
const {todo}=require("./db.js");
const cors=require("cors");

app.use(express.json());
app.use(cors());

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg:"wrong inputs"});
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    });
    res.json({
        msg:"todo created"
    })
});

app.get('/todos',async (req,res)=>{
    const todos= await todo.find({});
    res.json({todos:todos})
});

app.put('/completed',async (req,res)=>{
    const Payload=req.body;
    const parsedPayload=updateTodo.safeParse(Payload);
    if(!parsedPayload.success){
        res.status(411).json({msg:"wrong inputs"});
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo completed"
    })
});

app.listen(3000);