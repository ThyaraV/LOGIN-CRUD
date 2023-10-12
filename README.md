# LOGIN-CRUD
Login and CRUD with React and node.js
# Mi Aplicación MERN (MongoDB, Express, React, Node.js)

Bienvenido a mi aplicación MERN, una plataforma que permite a los usuarios gestionar tareas después de registrarse e iniciar sesión. En mi aplicación MERN, el inicio de sesión permite a los usuarios autenticarse de manera segura. Cuando un usuario proporciona su correo electrónico y contraseña, el servidor verifica las credenciales y, si son correctas, emite un token de acceso. Este token se utiliza para permitir el acceso a rutas protegidas en la aplicación, asegurando que solo los usuarios autenticados puedan ver y gestionar sus tareas y perfiles.A continuación, se presenta una breve explicación de la funcionalidad de inicio de sesión en la aplicación:

## Inicio de Sesión

- **Servidor Express:** El servidor Express configura rutas y gestiona la lógica de inicio de sesión.

- **Esquema de Validación:** Se utilizan esquemas de validación para asegurarse de que los datos de inicio de sesión sean correctos, como verificar que el correo electrónico sea válido y que la contraseña tenga al menos 6 caracteres.

- **Controladores de Autenticación:** Los controladores de inicio de sesión gestionan la lógica de autenticación. Verifican si las credenciales de usuario coinciden con los registros de la base de datos. Si las credenciales son correctas, se genera un token de acceso.

- **Middleware de Validación de Token:** Se utiliza middleware para garantizar que las rutas protegidas solo sean accesibles para usuarios autenticados. Este middleware verifica la validez del token de acceso y establece la identidad del usuario en la solicitud (`req.user`).

- **JWT (JSON Web Tokens):** La generación y gestión de tokens de acceso se realizan mediante JSON Web Tokens. Estos tokens se utilizan para autenticar a los usuarios en las rutas protegidas.

- **Páginas en el Cliente:** Las páginas de inicio de sesión en el cliente permiten a los usuarios ingresar su correo electrónico y contraseña. Cuando se envía el formulario, se realizan solicitudes al servidor para verificar las credenciales del usuario.

- **Axios:** Axios se utiliza para realizar solicitudes al servidor y gestionar la comunicación entre el cliente y el servidor en las páginas de inicio de sesión.

- **ProtectedRoute:** Se ha implementado una ruta protegida que redirige a los usuarios no autenticados a la página de inicio de sesión. Esta ruta protege las páginas de tareas y perfil.

# Diagrama LOGIN
![image](https://github.com/ThyaraV/LOGIN-CRUD/assets/96449161/f185d0e1-9865-4dcd-bf52-a71b81d3043e)
![image](https://github.com/ThyaraV/LOGIN-CRUD/assets/96449161/230c1cf0-a944-43ce-9531-99dcb25f26c4)


