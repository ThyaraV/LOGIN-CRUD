
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
function Navbar(){

    const{isAuthenticated,logout,user}=useAuth();
    return(
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h1 className="text-2xl font-bold">Gestión de tareas</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                    <li>
                        Bienvenido {user.username}
                    </li>
                    <li>
                        <Link to='/add-task'
                        className="bg-indigo-500 px-4 py-1 rounded-sm">Agrega una tarea</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={()=>{
                            logout();
                        }}>Cerrar Sesión</Link>
                    </li>
                    </>
                ):(
                    <>
                    <li>
                        <Link to='/login'
                        className="bg-indigo-500 px-4 py-1 rounded-sm">Inicio Sesión</Link>
                    </li>
                    <li>
                        <Link to='/register'
                        className="bg-indigo-500 px-4 py-1 rounded-sm">Registro</Link>
                    </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;