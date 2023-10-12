import {useForm} from 'react-hook-form';
import { useAuth } from '../Context/AuthContext';
import { useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function RegisterPage(){
    const {register,handleSubmit,formState:{errors},
    }=useForm();

    const {signup,isAuthenticated, errors:registerErrors}=useAuth();
    const navigate=useNavigate();

    useEffect(()=>{
        if(isAuthenticated) navigate("/tasks");
    },[isAuthenticated])


    const onSubmit=handleSubmit(async (values)=>{
       signup(values);
    });

    useEffect(()=>{
        if(isAuthenticated)navigate("/tasks");
    },[isAuthenticated])
    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            {
                registerErrors.map((error,i)=>(
                    <div className=' bg-red-500 p-2 text-white'key={i}>
                        {error}
                    </div>    
            
                ))
            }
        <form onSubmit={onSubmit}

        >
            <h1 className='text-3xl font-bold my-2'>Registro</h1>
            <input type="text" 
            {...register('username',{required:true})}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Usuario'/>
            {errors.username &&(
                    <p className='text-red-500'>Usuario Requerido</p>
                )}
            <input type="email" 
            {...register("email",{required:true})}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'placeholder='Email'/>
            {errors.email &&(
                    <p className='text-red-500'>Email Requerido</p>
                )}
            <input type="password" 
            {...register("password",{required:true})}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'placeholder='Contraseña'/>
            {errors.password &&(
                    <p className='text-red-500'>Password Requerido</p>
                )}
            <button type="submit"
            className='bg-sky-500 text-white px-4 py-2 runded-md my-2'>
                Registrarse
            </button>

            </form>
            <p className='flex gap-x-2 justify-between'>
                ¿Ya tienes una cuenta? <Link to="/login" className='text-sky-500'>Inicia sesión</Link>
            </p>

        </div>
    </div>
    )
}

export default RegisterPage