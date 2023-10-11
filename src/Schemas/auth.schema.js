import {z} from 'zod';

export const registerSchema=z.object({
username:z.string({
    required_error:'El nombre de usuario es requerido',
}),
email:z.string({
    required_error:'Email es requerido',
}).email({
    message:'Email inválido',
}),
password:z.string({
    required_error:'Contraseña es requerida',
}).min(6,{
    message:"Contraseña debe ser de mínimo 6 caracteres",
}),
});
export const loginSchema=z.object({
email:z.string({
    required_error:"email requerido",
}).email({
    message:'Email incorrecto',
}),
password:z.string({
    required_error:'Contraseña es requerida',
}).min(6,{
    message:"Contraseña debe ser de mínimo 6 caracteres",
}),
});