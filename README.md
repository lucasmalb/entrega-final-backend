E-commerce Marketplace
Descripción
El E-commerce Marketplace es una plataforma de comercio electrónico desarrollada con las tecnologías más avanzadas de Node.js, Express, MongoDB, y Socket.io. Este proyecto integra una amplia gama de funcionalidades, que incluyen la gestión de productos, carritos de compra, usuarios, y un sistema de chat en tiempo real. Además, se ha implementado un robusto sistema de autenticación basado en JWT y una eficiente gestión de imágenes de perfil y productos, lo que garantiza una experiencia de usuario segura y fluida.

Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript del lado del servidor, que ofrece una arquitectura orientada a eventos.
Express: Framework web minimalista que facilita la creación de aplicaciones y APIs robustas.
MongoDB: Base de datos NoSQL altamente escalable y flexible, ideal para gestionar grandes volúmenes de datos.
Mongoose: ODM (Object Data Modeling) para MongoDB, que proporciona una solución elegante para modelar datos en JavaScript.
Socket.io: Biblioteca para aplicaciones en tiempo real, que permite la comunicación bidireccional entre el cliente y el servidor.
Passport.js: Middleware de autenticación que soporta una amplia variedad de estrategias de inicio de sesión.
Winston: Herramienta para la gestión de logs, que permite una monitorización efectiva de la aplicación.
Handlebars: Motor de plantillas que facilita la creación de vistas dinámicas y reutilizables.
Swagger: Framework para la documentación y el diseño de APIs, que permite a los desarrolladores y equipos crear, visualizar y mantener APIs de manera eficiente.
FileSystem (FS): Módulo de Node.js que facilita la manipulación de archivos y directorios en el sistema de archivos.
JWT (JSON Web Tokens): Estándar abierto para la creación de tokens de acceso seguros, utilizado para la autenticación y el intercambio de información entre partes.
Faker: Librería para la generación de datos ficticios, utilizada en pruebas y simulaciones.
Bcrypt: Herramienta para el hash de contraseñas, que asegura la protección de las credenciales de los usuarios.
Nodemailer: Módulo que permite enviar correos electrónicos desde aplicaciones Node.js, con soporte para diversos servicios y configuraciones.
Estructura de Directorios
La estructura de directorios del proyecto está organizada de manera que promueve la mantenibilidad y escalabilidad de la aplicación. A continuación se presenta una descripción detallada:
/Ecommerce
├── src/
│   ├── config/         # Configuraciones del proyecto, incluyendo la configuración de Passport y la base de datos.
│   ├── controllers/    # Controladores responsables de la lógica de negocio asociada a las rutas.
│   ├── dao/            # Objetos de Acceso a Datos para la interacción con la base de datos.
│   ├── docs/           # Documentación del proyecto, incluyendo esquemas y especificaciones.
│   ├── dto/            # Objetos de Transferencia de Datos que estructuran los datos entre capas.
│   ├── logs/           # Archivos de log generados por la aplicación para auditoría y debugging.
│   ├── middlewares/    # Middlewares personalizados que añaden funcionalidad a las rutas.
│   ├── models/         # Modelos y esquemas de datos definidos mediante Mongoose.
│   ├── routes/         # Definiciones de las rutas que maneja la aplicación.
│   ├── services/       # Servicios que contienen la lógica de negocio de la aplicación.
│   ├── test/           # Pruebas unitarias e integradas que aseguran la calidad del código.
│   ├── utils/          # Utilidades y funciones auxiliares que soportan la lógica de la aplicación.
│   ├── views/          # Plantillas de vista para la renderización de la interfaz de usuario.
│   ├── app.js          # Archivo principal que configura y arranca la aplicación.
│   └── sockets.js      # Configuración de WebSockets para manejar la comunicación en tiempo real.
├── public/
│   ├── css/            # Archivos CSS que definen el estilo de la interfaz de usuario.
│   ├── documents/      # Documentos cargados por los usuarios.
│   ├── img/            # Imágenes utilizadas en la aplicación, tanto de productos como de avatars.
│   └── js/             # Archivos JavaScript que proporcionan funcionalidad en el lado del cliente.
├── README.md           # Documentación del proyecto.
├── LICENSE             # Archivo de licencia del proyecto.
└── package.json        # Dependencias y scripts del proyecto.

Instalación
1- Clonar el repositorio:
git clone https://github.com/lucasmalb/2da-entrega-integradora.git

2- Instalar las dependencias:

Navega al directorio del proyecto y ejecuta:
npm install

3- Configurar las variables de entorno:

Crea un archivo .env en la raíz del proyecto y define las siguientes variables:
PORT=
MONGO_URL=
MONGO_TEST_URL=
SESSION_SECRET=
CLIENT_ID=
SECRET_ID=
GITHUB_CALLBACK_URL=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
NODE_ENV=
EMAIL_USER=
EMAIL_PASSWORD=
PERSISTENCE=

4- Iniciar la aplicación:
   npm start


Uso
Inicio: Visita http://localhost:8080 para acceder a la aplicación.
Documentación API: Explora la documentación detallada de la API en /api/docs.
WebSocket: El sistema de chat en tiempo real y la actualización dinámica de productos emplean WebSockets, conectándose automáticamente al cargar la página.
Rutas
Vistas
Inicio: /
Iniciar Sesión: /login
Registro: /register
Productos: /products
Productos en Tiempo Real: /realtimeproducts
Chat: /chat
Carrito: /cart/:cid
Detalles del Producto: /products/item/:pid
Compra: /cart/:cid/purchase
Perfil: /profile
Restablecer Contraseña: /resetpassword
Nueva Contraseña: /newpassword/:pid
API
Productos

GET /api/products: Obtener una lista paginada de productos.
GET /api/products/:pid: Obtener los detalles de un producto específico por su ID.
POST /api/products: Crear un nuevo producto.
PUT /api/products/:pid: Actualizar la información de un producto existente.
DELETE /api/products/:pid: Eliminar un producto.
Carritos

GET /api/carts: Obtener todos los carritos de compra.
GET /api/carts/:cid: Obtener un carrito específico por su ID.
POST /api/carts: Crear un nuevo carrito.
POST /api/carts/:cid/products/:pid: Agregar un producto a un carrito existente.
DELETE /api/carts/:cid/products/:pid: Eliminar un producto de un carrito.
PUT /api/carts/:cid: Actualizar el contenido de un carrito.
PUT /api/carts/:cid/products/:pid: Modificar la cantidad de un producto en el carrito.
DELETE /api/carts/:cid: Vaciar un carrito.
GET /api/carts/:cid/purchase: Realizar una compra.
Usuarios

GET /api/users: Obtener una lista de todos los usuarios.
GET /api/users/premium/:uid: Convertir un usuario en premium.
POST /api/users/:uid/documents: Subir documentos para un usuario.


Contacto
Autor: Lucas Villalba
Correo: lucas.m.albrigi@gmail.com
