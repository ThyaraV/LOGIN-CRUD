import {useAuth} from "../Context/AuthContext.jsx"

function TasksPage(){
  const {user}=useAuth()
  
  return(
    <div>
        TasksPage
    </div>
  )
}
export default TasksPage