import { useEffect } from "react";
import { useTasks } from "../Context/TasksContext.jsx"
import TaskCard from "../Components/taskCard.jsx";

function TasksPage(){
  const {getTasks,tasks}=useTasks();

  useEffect(()=>{
    getTasks()
  },[])

  if(tasks.length==0)return(<h1>No existen tareas registradas</h1>);

  return (
    <div className="grid  md:grid-cols-2 grid-cols-3 gap-2">
    {
      tasks.map(task=>(
       <TaskCard  task={task} key={task._id} />
      ))
    }
  </div>
  );
}
export default TasksPage