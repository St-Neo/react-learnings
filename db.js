const mongoose=require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect(
    'mongodb+srv://eternalshinron:Shin_ron7@eternal-cluster.2tvsg.mongodb.net/todos'
);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}