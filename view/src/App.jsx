import { BrowserRouter, Routes,Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { AuthProvider } from "./Context/AuthContext";

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/tasks' element={<TasksPage/>}/>
          <Route path='/add-task' element={<TaskFormPage/>}/>
          <Route path='/tasks/:id' element={<TaskFormPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App