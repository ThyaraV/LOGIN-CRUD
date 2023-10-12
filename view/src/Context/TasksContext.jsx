import { createContext, useState,useContext } from "react";
import  {createTaskRequest, getTasksRequest} from "../api/tasks.js";

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

    return(
        <TaskContext.Provider value={{tasks,createTask,getTasks}}>
            {children}
        </TaskContext.Provider>
    );


};