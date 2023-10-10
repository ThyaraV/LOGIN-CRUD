import Task from '../models/task.model.js';

//petición a la bd
export const getTasks =async (req,res)=>{
    const tasks=await Task.find({
        user:req.user.id
    }).populate('user')
    res.json(tasks);
}
export const createTasks =async (req,res)=>{
    const{title,description,date}=req.body;
    console.log(req.user)

    const newTask=new Task({
        title,
        description,
        date,
        user:req.user.id
    });
    const savedTask=await newTask.save()
    res.json(savedTask);
};
export const getTask =async (req,res)=>{
    const task=await Task.findById(req.params.id).populate('user');

    if(!task) return res.status(404).json({message:"Tarea no encontrada"})
    res.json(task)
}
export const updateTasks =async (req,res)=>{
    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(!task) return res.status(404).json({message:"Tarea no encontrada"})
    res.json(task)
}
export const deleteTasks =async (req,res)=>{
    const task=await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message:"Tarea no encontrada"})
    return res.sendStatus(204);//Todo esta bien se elimina
}
