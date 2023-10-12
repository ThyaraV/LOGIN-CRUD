import { useAuth } from "./Context/AuthContext"; 
import {navigate} from "./Context/AuthContext";

function ProtectedRoute(){
    const {user, isAuthenticated}=useAuth();
    if(!isAuthenticated return )

}