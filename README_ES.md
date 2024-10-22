# 🌐 Cambiar idioma

Elige tu idioma preferido:

- <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English" width="25"/> [Ingles](README.md)
- <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español" width="25"/> [Español](README_ES.md)

# 🛒 E-Commerce Backend

Este repositorio contiene el backend de un sistema de eCommerce, desarrollado con **Node.js**, **Express** y **MySQL**. Este proyecto está diseñado para manejar todas las funcionalidades clave de un eCommerce, incluyendo la gestión de usuarios, autenticación, productos, pedidos, y más.

## ⚙️ Tecnologías Utilizadas

- **Node.js**: Plataforma para la ejecución del backend.
- **Express.js**: Framework para la creación de la API REST.
- **MySQL**: Base de datos relacional utilizada para almacenar la información de los usuarios, productos, pedidos, etc.
- **Prisma**: ORM para la interacción con la base de datos
- **JWT**: Token para la autenticación de usuarios.
- **bcrypt**: Librería para el cifrado de contraseñas.
- **Cookies**: Almacenamiento de tokens de autenticación en el cliente.
- **Zod**: Almacenamiento de tokens de autenticación en el cliente.
- **Morgan**: Almacenamiento de tokens de autenticación en el cliente.
- **Cloudinary**:

## 🚀 Funcionalidades Principales

- **Registro e inicio de sesión de usuarios**: Autenticación de clientes utilizando JWT y almacenamiento seguro de contraseñas con bcrypt.
- **Gestión de productos**: Operaciones CRUD para productos, incluyendo categorías, descripciones y precios.
- **Carrito de compras y pedidos**: Implementación de un carrito de compras, gestión de pedidos y actualización del stock de productos.
- **Subida de imágenes**: Subida y gestión de imágenes de perfil de usuarios y productos utilizando cloudinary.
- **Autorización y roles**: Control de acceso para diferentes usuarios del sistema (administradores y clientes).
- **Perfil de usuario**: Los clientes pueden actualizar su información personal y cambiar su imagen de perfil.

## 🛠️ Configuración y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Suarez099/E-Commerce-Backend.git
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno:

   - Crear un archivo `.env` en la raíz del proyecto con la siguiente estructura:

   ```plaintext

   ```

# ==== Puertos ====

PORT=tu_pueto

# ==== Cors ====

CORS_ORIGIN= tu_frontend

# ==== Key Secret ====

JWT_SECRET=tu secret key

# ==== Cloudinary ====

CLOUDINARY_CLOUD_NAME=name clouninary
CLOUDINARY_API_KEY=tu ...
CLOUDINARY_API_SECRET=tu

DATABASE_URL="mysql://usuario:contraseña@localhost:3306/basededatos"

````

4. Ejecutar migraciones de la base de datos (si usas un ORM como Sequelize):

```bash
npx prisma migrate dev --name nombre_de_migración
````

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

- Asegúrate de configurar las credenciales correctas para la base de datos en el archivo `.env`.
- Para desplegar este backend en un servidor, puedes utilizar **Docker**, **Heroku**, **Vercel**, o cualquier servicio compatible con Node.js.
