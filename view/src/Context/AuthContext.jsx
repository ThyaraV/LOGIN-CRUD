import{createContext, useContext, useState,useEffect} from'react';
import { registerRequest,loginRequest,verifyTokenRequet } from '../api/auth.js';
import Cookies from "js-cookie";
export const AuthContext=createContext();

export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw new Error("useAuth debería estar dentro de un AuthProvider");
    }
    return context;
}

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [errors,setErrors]=useState([]);
    const [loading,setloading]=useState(true);

    const signup=async(user)=>{
        try{
            const res= await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);

        }catch(error){
            //console.log(error.response);
            setErrors(error.response.data);
        }
    };
    const signin=async(user)=>{
        try{
            const res=await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true);
            setUser(res.data);
        }catch(error){
           if(Array.isArray(error.response.data)){
            return setErrors(error.response.data)
           }
           setErrors([error.response.data.message])
        }
    };
    
    useEffect(()=>{
        if(errors.length >0){
            const Timer=setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=> clearTimeout(Timer)
        }
    },[errors])

    useEffect(()=>{
      async function checkLogin(){
        const cookies=Cookies.get();
        if(!cookies.token){
            setIsAuthenticated(false);
            setloading(false);
            return setUser(null);
        }
        try{
            const res= await verifyTokenRequet(cookies.token)
            if(!res.data) {
                setIsAuthenticated(false);   
                setloading(false);
                return;
            } 
            
            setIsAuthenticated(true);
            setUser(res.data);
            setloading(false);
        }catch(error){
            setIsAuthenticated(false);
            setUser(null);
            setloading(false);
        }
       }
      checkLogin();
    },[]);
    
    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            errors
        }}>{children}
        </AuthContext.Provider>
    )
}