# Sistema de Gestión de Stock

## Introducción al Proyecto

Este proyecto consiste en un sistema de gestión de stock diseñado para facilitar el manejo de productos y proveedores. Permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos y los proveedores. La aplicación está dividida en un backend, desarrollado con Django Rest Framework, y un frontend, creado con Next.js y TypeScript.

## Tecnologías Utilizadas

- **Backend**: Python, Django, Django Rest Framework
- **Frontend**: TypeScript, Next.js, React, Tailwind CSS
- **Base de Datos**: SQLite
- **Autenticación**: JWT,

## Endpoints del Backend

Los endpoints disponibles en el backend son los siguientes:

- **Productos**:

  - Listar todos los productos: `GET /api/productos/`
  - Crear un nuevo producto: `POST /api/productos/`
  - Obtener detalles de un producto: `GET /api/productos/{id}/`
  - Actualizar un producto: `PUT /api/productos/{id}/`
  - Eliminar un producto: `DELETE /api/productos/{id}/`

- **Proveedores**:

  - Listar todos los proveedores: `GET /api/proveedores/`
  - Crear un nuevo proveedor: `POST /api/proveedores/`
  - Obtener detalles de un proveedor: `GET /api/proveedores/{id}/`
  - Actualizar un proveedor: `PUT /api/proveedores/{id}/`
  - Eliminar un proveedor: `DELETE /api/proveedores/{id}/`

- **Usuarios**:
  - Registrar un nuevo usuario: `POST /api/register/`
  - Iniciar sesión: `POST /api/login/`

Para probar los endpoints en Swagger, siga estos pasos:

1. Navegue a `/swagger/` en su navegador para acceder a la interfaz de usuario de Swagger.
2. Para los endpoints que requieren autenticación, primero debe obtener un token utilizando el endpoint de inicio de sesión (`POST /api/login/`). Deberá proporcionar un nombre de usuario y contraseña válidos en el cuerpo de la solicitud.
3. Una vez que tenga un token, puede utilizarlo para autenticarse en los endpoints protegidos. En Swagger, haga clic en el botón "Authorize" y escriba "Token " seguido de su token de autenticación en el campo de valor. Asegúrese de incluir el espacio después de "Token".
4. Ahora puede probar los endpoints protegidos utilizando la interfaz de Swagger, pasando los parámetros necesarios según lo requiera cada endpoint.

## Panel de Administración de Django

Django proporciona un panel de administración robusto y fácil de usar, que permite a los administradores del sistema gestionar el contenido del sitio de manera eficiente. Este panel es altamente personalizable y se puede adaptar para satisfacer las necesidades específicas de cualquier proyecto.

Para acceder al panel de administración, primero debe crearse un superusuario utilizando el comando `python manage.py createsuperuser` desde la línea de comandos. Una vez creado, puede acceder al panel visitando `/admin` en su navegador y utilizando las credenciales del superusuario.

![Login Admin](https://github.com/Leonel-H29/StockControl/assets/48606307/aba61f99-5234-44d4-ba69-dd1b37603e8a)

![Dashboard](https://github.com/Leonel-H29/StockControl/assets/48606307/534ac2f1-3bc4-47c2-ba64-92ff2ff4ffe3)

### Características Principales:

- **Gestión de Usuarios**: Administre los usuarios de su aplicación, incluyendo la creación, edición y eliminación de usuarios.
- **Gestión de Modelos**: Acceda y modifique los datos de los modelos registrados, como `Productos` y `Proveedores`, directamente desde la interfaz.
- **Personalización**: Personalice la apariencia y el comportamiento del panel de administración para adaptarlo a las necesidades de su proyecto.
- **Seguridad**: El panel de administración incluye varias características de seguridad, como la autenticación de usuarios y la gestión de permisos.

### Ejemplo de Personalización:

Para personalizar la visualización de los modelos en el panel de administración, puede modificar los archivos `admin.py` dentro de sus aplicaciones. Por ejemplo, para el modelo `Producto`, se ha definido una clase `ProductoAdmin` que especifica cómo se deben mostrar los productos en el panel.

![Tables](https://github.com/Leonel-H29/StockControl/assets/48606307/2131081a-6e97-4ad9-8dcd-93ef0e1ddacd)

## Vistas del Frontend

Las vistas disponibles en el frontend son las siguientes:

- **Home**: Página de inicio que muestra un mensaje de bienvenida al usuario.
  ![Home](https://github.com/Leonel-H29/StockControl/assets/48606307/3b696886-df0c-4cc9-84cc-9fcda1e1513a)

- **Login**: Página para iniciar sesión.
  ![Login](https://github.com/Leonel-H29/StockControl/assets/48606307/7668cd0f-738b-45a5-b7e9-4a78df060668)

- **Register**: Página para registrar un nuevo usuario.
  ![Register](https://github.com/Leonel-H29/StockControl/assets/48606307/9b2fc86c-40be-440a-a1c2-bfb41578860d)

- **Listado de Productos**: Muestra un listado de todos los productos disponibles.
  ![Listado de Productos](https://github.com/Leonel-H29/StockControl/assets/48606307/e12d42a9-3bbe-4418-918b-9702eeaa1934)
- **Crear Producto**: Formulario para crear un nuevo producto.
  ![Crear Producto](https://github.com/Leonel-H29/StockControl/assets/48606307/d20baf2a-38b9-4457-8e25-ab95a387108f)

- **Editar Producto**: Formulario para editar un producto existente.
  ![Editar Producto](https://github.com/Leonel-H29/StockControl/assets/48606307/0a3e7ad4-5183-43f4-980e-a1ee4072b3bd)

- **Listado de Proveedores**: Muestra un listado de todos los proveedores disponibles.
  ![Listado de Proveedores](https://github.com/Leonel-H29/StockControl/assets/48606307/13c9abc2-cad8-4908-9e06-2ce7e94bbd8f)

- **Crear Proveedor**: Formulario para crear un nuevo proveedor.
  ![Crear Proveedor](https://github.com/Leonel-H29/StockControl/assets/48606307/c74716d9-54aa-4f71-83cb-7baa970acfb5)

- **Editar Proveedor**: Formulario para editar un proveedor existente.
  ![Editar Proveedor](https://github.com/Leonel-H29/StockControl/assets/48606307/85aca5de-4abe-4dfa-b0f8-362d984ff556)

Cada una de estas vistas está diseñada para ser responsiva y fácil de usar, aprovechando las capacidades de Tailwind CSS para crear una interfaz de usuario atractiva y funcional.

## Ejecución Local del Proyecto

Para ejecutar localmente tanto el backend como el frontend de este proyecto, siga las instrucciones específicas para su sistema operativo.

### Backend (Django)

#### Windows

1. Abra una terminal y navegue hasta la carpeta del proyecto.
2. Cree un entorno virtual ejecutando: `python -m venv venv`
3. Active el entorno virtual: `.\venv\Scripts\activate`
4. Instale las dependencias: `pip install -r requirements.txt`
5. Ejecute las migraciones: `python manage.py migrate`
6. Inicie el servidor: `python manage.py runserver`

#### macOS/Linux

1. Abra una terminal y navegue hasta la carpeta del proyecto.
2. Cree un entorno virtual ejecutando: `python3 -m venv venv`
3. Active el entorno virtual: `source venv/bin/activate`
4. Instale las dependencias: `pip install -r requirements.txt`
5. Ejecute las migraciones: `python3 manage.py migrate`
6. Inicie el servidor: `python3 manage.py runserver`

### Frontend (NextJS)

#### Windows/macOS/Linux

1. Abra una nueva terminal y navegue hasta la carpeta del frontend dentro del proyecto.
2. Instale las dependencias con: `npm install`
3. Inicie la aplicación: `npm start`
4. La aplicación debería abrirse automáticamente en su navegador. Si no es así, visite `http://localhost:3000`.

Estas instrucciones deberían permitirle ejecutar localmente el backend y el frontend del proyecto en su máquina, independientemente del sistema operativo que esté utilizando.
