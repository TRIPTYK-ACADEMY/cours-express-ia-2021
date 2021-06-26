// const todos ={todos:[{id:1, title:"clean computer"},{id:2, title:"clean car"}]}
const TodoModel = require('../models/todo');
exports.index = async (req,res,next)=>{
    let {page,size} = req.query;
    
    size = size ? parseInt(size) : 2;
    page = parseInt(page)
    const totalTodos = await TodoModel.countDocuments();
    const totalPages=totalTodos/size;
    const currentPage=page ? page : 1;
    const  todos = await TodoModel.find().skip((currentPage-1)*size).limit(size)
    res.json({totalPages, totalTodos,currentPage,todos})
}
exports.findById = async (req,res,next)=>{
    const {id} = req.params
    const todo = await TodoModel.findById(id);
    res.json(todo)
}
exports.updateById = async (req,res,next)=>{
    const {id} = req.params
    const todo = await TodoModel.findByIdAndUpdate(id,req.body,{new:true})
    res.json(todo)
}
exports.deleteById = async (req,res,next)=>{
    const {id} = req.params
    const todo = await TodoModel.findByIdAndDelete(id)
    res.json(todo)
}
exports.create = async (req,res,next)=>{
    const todo = await TodoModel.create(req.body);
    res.status(201).json(todo)
}