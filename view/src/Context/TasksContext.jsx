import { createContext, useState,useContext } from "react";
import  {createTaskRequest, getTasksRequest,deleteTaskRequest,updateTaskRequest,getTaskRequest} from "../api/tasks.js";

const TaskContext = createContext();

export const useTasks=()=>{
    const context=useContext(TaskContext);
    if(!context){
        throw new Error("useTasks debe ser usado sin un TaskProvider");
    }
    return context;

}

export function TaskProvider({children}){
    const [tasks,setTasks]=useState([]);
   
   const getTasks=async()=>{
       try{
        const res= await getTasksRequest();
        setTasks(res.data);
       }catch(error){
        console.error(error);  
       }
   }
   
   
    const createTask=async(task)=>{
        const res=await createTaskRequest(task)
        console.log(res)
    }

    const deleteTask=async (id)=>{
        try{
            const res= await deleteTaskRequest(id);
            console.log(res);
            if(res.status==200) setTasks(tasks.filter((task)=>task._id!==id));
            
        }  catch(error){
            console.log(error);
        } 
           
    }

    const getTask=async(id)=>{
        try{
            const res=await getTaskRequest(id);
            return res.data;
        }catch(error){
            console.error(error);
        }
            
    }

    const updateTask=async(id,task)=>{
        try{
            await updateTaskRequest(id,task);
        }catch(error){
            console.error(error);
        }
    }

    return(
        <TaskContext.Provider value={
            {tasks,createTask,getTasks,deleteTask,getTask,updateTask}}>
            {children}
        </TaskContext.Provider>
    );


};