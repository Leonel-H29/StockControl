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

## Panel de Administración de Django

Django proporciona un panel de administración robusto y fácil de usar, que permite a los administradores del sistema gestionar el contenido del sitio de manera eficiente. Este panel es altamente personalizable y se puede adaptar para satisfacer las necesidades específicas de cualquier proyecto.

Para acceder al panel de administración, primero debe crearse un superusuario utilizando el comando `python manage.py createsuperuser` desde la línea de comandos. Una vez creado, puede acceder al panel visitando `/admin` en su navegador y utilizando las credenciales del superusuario.

![Login Admin](<Captura desde 2024-03-15 14-19-59.png>)

![Dashboard](<Captura desde 2024-03-15 14-20-14.png>)

### Características Principales:

- **Gestión de Usuarios**: Administre los usuarios de su aplicación, incluyendo la creación, edición y eliminación de usuarios.
- **Gestión de Modelos**: Acceda y modifique los datos de los modelos registrados, como `Productos` y `Proveedores`, directamente desde la interfaz.
- **Personalización**: Personalice la apariencia y el comportamiento del panel de administración para adaptarlo a las necesidades de su proyecto.
- **Seguridad**: El panel de administración incluye varias características de seguridad, como la autenticación de usuarios y la gestión de permisos.

### Ejemplo de Personalización:

Para personalizar la visualización de los modelos en el panel de administración, puede modificar los archivos `admin.py` dentro de sus aplicaciones. Por ejemplo, para el modelo `Producto`, se ha definido una clase `ProductoAdmin` que especifica cómo se deben mostrar los productos en el panel.

![Tables](<Captura desde 2024-03-15 14-23-04.png>)

## Vistas del Frontend

Las vistas disponibles en el frontend son las siguientes:

- **Home**: Página de inicio que muestra un mensaje de bienvenida al usuario.
  ![Home](<Captura desde 2024-03-15 14-13-29.png>)

- **Login**: Página para iniciar sesión.
  ![Login](<Captura desde 2024-03-15 14-12-48.png>)

- **Register**: Página para registrar un nuevo usuario.
  ![Register](<Captura desde 2024-03-15 14-13-02.png>)

- **Listado de Productos**: Muestra un listado de todos los productos disponibles.
  ![Listado de Productos](<Captura desde 2024-03-15 14-13-36.png>)

- **Crear Producto**: Formulario para crear un nuevo producto.
  ![Crear Producto](<Captura desde 2024-03-15 14-26-17.png>)

- **Editar Producto**: Formulario para editar un producto existente.
  ![Editar Producto](<Captura desde 2024-03-15 14-13-56.png>)

- **Listado de Proveedores**: Muestra un listado de todos los proveedores disponibles.
  ![Listado de Proveedores](<Captura desde 2024-03-15 14-13-43.png>)

- **Crear Proveedor**: Formulario para crear un nuevo proveedor.
  ![Crear Proveedor](<Captura desde 2024-03-15 14-28-13.png>)

- **Editar Proveedor**: Formulario para editar un proveedor existente.
  ![Editar Proveedor](<Captura desde 2024-03-15 14-14-08.png>)

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
