# DISEÑO DE INGENIERÍA
La ingeniería web se ha vuelto fundamental en el mundo digital de hoy, y para crear aplicaciones web robustas y escalables, es esencial contar con herramientas adecuadas. Entre los frameworks más destacados, React, Node.js y Express se destacan por sus características únicas y su popularidad en el desarrollo web moderno.

## Frameworks
## REACT-La Biblioteca de JavaScript para Interfaces de Usuario
React es una biblioteca de JavaScript desarrollada y mantenida por Facebook que se ha convertido en una de las opciones más populares para construir interfaces de usuario (UI) interactivas y dinámicas. Algunas de sus características más notables incluyen:

[Componentización] React permite dividir la interfaz de usuario en componentes reutilizables, lo que facilita la construcción y el mantenimiento de aplicaciones complejas.
[Virtual-DOM] Utiliza un Virtual DOM para actualizar eficientemente la UI, minimizando las actualizaciones en el DOM real y mejorando el rendimiento de la aplicación.
[Amplia-Comunidad] React cuenta con una comunidad activa y una amplia gama de bibliotecas y herramientas complementarias, lo que facilita la creación de aplicaciones personalizadas.

## NODE.JS-Plataforma para Construir Aplicaciones Web Rápidas y Escalables

Node.js es una plataforma de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript en el lado del servidor. Algunas de sus características destacadas son:

[Eficiencia] Node.js utiliza un modelo de E/S no bloqueante que lo hace altamente eficiente y adecuado para aplicaciones en tiempo real y de alta concurrencia.
[NPM(Node-Package-Manager] Ofrece acceso a un vasto ecosistema de paquetes y módulos, lo que facilita la gestión de dependencias y el desarrollo rápido.
[Escalabilidad] Node.js es altamente escalable gracias a su modelo de eventos y su capacidad para manejar múltiples conexiones simultáneas.

## Express - Framework Minimalista para Node.js

Express es un framework minimalista para Node.js que simplifica el desarrollo de aplicaciones web y APIs. Sus características notables incluyen:

[Rutas-y-Middleware] Express ofrece un sistema de manejo de rutas y middleware que facilita la creación de rutas personalizadas y el procesamiento de solicitudes HTTP.
[Amplia-Adopción] Es ampliamente adoptado en la comunidad de desarrollo de Node.js y cuenta con una gran cantidad de complementos y extensiones disponibles.
[Flexibilidad] Express es lo suficientemente flexible como para adaptarse a una variedad de aplicaciones web, desde simples APIs hasta aplicaciones web complejas.

### ARQUITECTURA DE FRAMEWORKS
![image](https://github.com/ThyaraV/LOGIN-CRUD/assets/96449161/f7b7d0a8-e7a1-4349-bc83-3e6d6a16f0af)
![image](https://github.com/ThyaraV/LOGIN-CRUD/assets/96449161/83613e8c-b440-45e2-ba58-309659627294)

Un sistema CRUD (Create, Read, Update, Delete) en una aplicación MERN (MongoDB, Express.js, React, Node.js) sigue la arquitectura MVC (Model-View-Controller). En esta arquitectura:

- **Modelo (Model):** Representa la capa de datos de la aplicación y se relaciona con la base de datos, típicamente MongoDB en aplicaciones MERN. El Modelo define cómo se estructuran y almacenan los datos. Mapea a las colecciones de la base de datos y establece las operaciones de CRUD a través de un ODM (Object-Document Mapping) como Mongoose. Esto implica la creación de esquemas para los datos y la lógica para interactuar con la base de datos.

- **Vista (View):** Representa la interfaz de usuario (UI) de la aplicación, generalmente construida utilizando React en una aplicación MERN. La Vista es responsable de la presentación de datos al usuario y la recolección de información a través de formularios u otros elementos de la interfaz. También se encarga de mostrar los datos recuperados del Modelo.

- **Controlador (Controller):** Actúa como un intermediario entre el Modelo y la Vista. En una aplicación MERN, esta capa se construye utilizando Node.js y Express.js. El Controlador maneja las solicitudes del cliente, procesa la lógica empresarial, y se comunica con el Modelo para realizar operaciones CRUD en la base de datos. Responde a las solicitudes HTTP (por ejemplo, GET, POST, PUT, DELETE) y gestiona las rutas y las acciones correspondientes.

# LOGIN-CRUD
# Mi Aplicación MERN (MongoDB, Express, React, Node.js)

Una plataforma que permite a los usuarios gestionar tareas después de registrarse e iniciar sesión. En la aplicación MERN, el inicio de sesión permite a los usuarios autenticarse de manera segura. Cuando un usuario proporciona su correo electrónico y contraseña, el servidor verifica las credenciales y, si son correctas, emite un token de acceso. Este token se utiliza para permitir el acceso a rutas protegidas en la aplicación, asegurando que solo los usuarios autenticados puedan ver y gestionar sus tareas y perfiles.A continuación, se presenta una breve explicación de la funcionalidad de inicio de sesión en la aplicación:

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

**Diagrama de Componentes y Relaciones para la Autenticación en una Aplicación MERN**

Este diagrama representa los componentes y sus relaciones en una aplicación MERN (MongoDB, Express, React y Node.js) que incluye la funcionalidad de autenticación de usuarios. La autenticación se refiere a la capacidad de los usuarios para registrarse e iniciar sesión en la aplicación. 

- **Usuario:** Representa la entidad de usuario. Los usuarios pueden registrarse e iniciar sesión en la aplicación.

- **Autenticación:** Este grupo de componentes está relacionado con la autenticación de usuarios.

- **App.js:** El archivo principal de la aplicación Express.js. Controla las rutas y configura el servidor.

- **auth.routes.js:** Define las rutas relacionadas con la autenticación, como registro, inicio de sesión y cierre de sesión.

- **auth.controller.js:** Controla la lógica de autenticación. Comprueba credenciales, genera tokens de acceso y maneja las respuestas al cliente.

- **auth.schema.js:** Define esquemas de validación para el registro y el inicio de sesión, incluyendo reglas como contraseñas de al menos 6 caracteres y formatos de correo electrónico válidos.

- **jwt.js:** Proporciona funciones para crear y verificar tokens JWT (JSON Web Token) que se utilizan para autenticar a los usuarios.

- **validateToken.js:** Middleware que verifica la autenticidad de los tokens JWT en las solicitudes entrantes.

- **validateSchema.js:** Middleware que valida los datos de entrada utilizando los esquemas definidos en auth.schema.js.

- **db.js:** Configura la conexión a la base de datos MongoDB.

- **user.model.js:** Define el modelo de datos para los usuarios, incluyendo campos como nombre de usuario, correo electrónico y contraseña.

- **Páginas:** Estas representan las páginas de la aplicación que interactúan con los usuarios.

- **Login Page:** La página de inicio de sesión donde los usuarios pueden ingresar sus credenciales.

- **Register Page:** La página de registro donde los usuarios pueden crear nuevas cuentas.

- **Task Page:** Una página relacionada con la gestión de tareas. Puede requerir autenticación.

- **Profile Page:** La página de perfil del usuario, que puede requerir autenticación.

- **Contexto:** Contiene el componente authContext.jsx, que maneja el estado de autenticación y proporciona acceso a funciones como registro, inicio de sesión y cierre de sesión.

- **Componentes:** Representa el componente Navbar.jsx, que es una barra de navegación utilizada en las páginas de la aplicación para facilitar la navegación.

- **API:** Incluye el componente axios.js, que se utiliza para realizar solicitudes HTTP al servidor de la aplicación, incluyendo el envío de datos de autenticación.

**Flujo de Autenticación en una Aplicación MERN**

-**Registro de Usuario:**

El proceso de autenticación comienza cuando un nuevo usuario desea registrarse en la aplicación. Esto se inicia en la página de registro (**Register Page**).En la página de registro, el usuario proporciona su nombre de usuario, correo electrónico y contraseña. Estos datos se capturan en un formulario y se envían a través de una solicitud HTTP al servidor. La validación de los datos del usuario se lleva a cabo utilizando el esquema definido en **auth.schema.js.** Si los datos son válidos, se procesa el registro.

El servidor ejecuta la lógica de registro en **auth.controller.js**. Esto implica verificar si el correo electrónico ya está en uso y, de ser necesario, encriptar la contraseña antes de almacenarla en la base de datos. Si el proceso es exitoso, se genera un token de acceso JWT.El token de acceso se guarda en una cookie y se devuelve al cliente. Esto permite que el usuario quede autenticado automáticamente en futuras interacciones con la aplicación.

-**Inicio de Sesión de Usuario:**

Cuando un usuario ya registrado desea iniciar sesión, accede a la página de inicio de sesión (**Login Page**).En esta página, el usuario ingresa su correo electrónico y contraseña, que se envían al servidor a través de una solicitud HTTP.

El servidor, en **auth.controller.js**, verifica si el correo electrónico corresponde a un usuario existente en la base de datos. Luego, compara la contraseña proporcionada con la almacenada en la base de datos después de desencriptarla.Si las credenciales son válidas, el servidor genera un nuevo token de acceso JWT. Este token se almacena en una cookie y se envía de vuelta al cliente. El usuario ahora tiene acceso a las páginas de la aplicación que requieren autenticación, como la página de tareas (**Task Page**) y su perfil (**Profile Page**).

-**Navegación en la Aplicación:**

Una vez que el usuario está autenticado, puede navegar por la aplicación, acceder a su perfil, gestionar tareas y más. La barra de navegación (**Navbar.jsx**) facilita la navegación.
Gestión de Tareas y Perfil: La página de tareas (**Task Page**) permite al usuario crear, editar y eliminar tareas. Los datos de las tareas se gestionan en el servidor y se almacenan en la base de datos. La página de perfil (**Profile Page**) muestra información del usuario y permite realizar operaciones relacionadas con su cuenta.

-**Cierre de Sesión:**

En cualquier momento, el usuario puede optar por cerrar sesión. Esto se logra haciendo clic en "Cerrar Sesión" en la barra de navegación. El servidor recibe una solicitud para cerrar sesión y responde eliminando la cookie del token de acceso, lo que revoca la autenticación del usuario.

