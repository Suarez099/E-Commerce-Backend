
# 🌐 Cambiar idioma

Elige tu idioma preferido:

- <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English" width="25"/> [Ingles](README.md)
- <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español" width="25"/> [Español](README_ES.md)

# 🛒 Veterinaria E-Commerce Backend

Este repositorio contiene el backend de un sistema de eCommerce para una veterinaria, desarrollado con **Node.js**, **Express** y **MySQL**. Este proyecto maneja todas las funcionalidades clave de un eCommerce, incluyendo la gestión de usuarios, autenticación, productos, pedidos, imágenes y más.

## ⚙️ Tecnologías Utilizadas

- **Node.js**: Plataforma para la ejecución del backend.
- **Express.js**: Framework para la creación de la API REST.
- **MySQL**: Base de datos relacional para almacenar la información de los usuarios, productos, pedidos, etc.
- **Prisma**: ORM para la interacción con la base de datos.
- **JWT**: Token para la autenticación de usuarios.
- **bcrypt**: Librería para el cifrado de contraseñas.
- **Cloudinary**: Servicio de almacenamiento de imágenes.
- **cookie-parser**: Manejo de cookies en las solicitudes.
- **CORS**: Configuración de permisos entre cliente y servidor.
- **dotenv**: Manejo de variables de entorno.
- **express-fileupload**: Gestión de la subida de archivos.
- **fs-extra**: Manipulación avanzada del sistema de archivos.
- **jsonwebtoken**: Generación y verificación de tokens JWT.
- **morgan**: Logger HTTP para solicitudes.
- **zod**: Validación de datos.

## 🚀 Funcionalidades Principales

- **Registro e inicio de sesión de usuarios**: Autenticación de clientes utilizando JWT y almacenamiento seguro de contraseñas con bcrypt.
- **Gestión de productos**: Operaciones CRUD para productos, incluyendo descripciones, categorías, precios y stock.
- **Carrito de compras y pedidos**: Implementación de carrito de compras, creación de pedidos y actualización del stock.
- **Subida de imágenes**: Subida y gestión de imágenes de usuarios y productos usando Cloudinary.
- **Autorización y roles**: Control de acceso para administradores y clientes.
- **Perfil de usuario**: Actualización de información personal y cambio de imagen de perfil.

## 🛠️ Configuración y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/veterinaria-ecommerce-backend.git
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno:

   - Crear un archivo `.env` en la raíz del proyecto con la siguiente estructura:

   ```plaintext
   # ==== Puertos ====
   PORT=tu_puerto

   # ==== Cors ====
   CORS_ORIGIN=tu_frontend

   # ==== Key Secret ====
   JWT_SECRET=tu_secret_key

   # ==== Cloudinary ====
   CLOUDINARY_CLOUD_NAME=tu_nombre_cloudinary
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret

   # ==== Base de datos ====
   DATABASE_URL="mysql://usuario:contraseña@localhost:3306/basededatos"
   ```

4. Ejecutar migraciones de la base de datos:

   ```bash
   npx prisma migrate dev --name nombre_migracion
   ```

5. Iniciar el servidor:

   ```bash
   npm run dev
   ```

## 📂 Estructura del Proyecto

```
┣ 📂controllers
┣ 📂models
┣ 📂routes
┣ 📂middlewares
┣ 📂utils
┣ 📂uploads
┣ 📜app.js
┣ 📜package.json
┣ 📜.env.example
┗ 📜README.md
```

## 📝 Notas Adicionales

- Asegúrate de configurar correctamente las credenciales de la base de datos en el archivo `.env`.
- Para desplegar este backend en un servidor, puedes utilizar **Docker**, **Heroku**, **Vercel** u otros servicios compatibles con Node.js.
