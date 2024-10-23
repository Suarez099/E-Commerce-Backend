
# 🌐 Change Language

Choose your preferred language:

- <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English" width="25"/> [English](README.md)
- <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español" width="25"/> [Español](README_ES.md)

# 🛒 Veterinary E-Commerce Backend

This repository contains the backend of an eCommerce system for a veterinary clinic, developed with **Node.js**, **Express**, and **MySQL**. This project handles all key eCommerce functionalities, including user management, authentication, products, orders, images, and more.

## ⚙️ Technologies Used

- **Node.js**: Platform for running the backend.
- **Express.js**: Framework for building the REST API.
- **MySQL**: Relational database used to store information about users, products, orders, etc.
- **Prisma**: ORM for database interaction.
- **JWT**: Token-based user authentication.
- **bcrypt**: Library for password encryption.
- **Cloudinary**: Service for image storage.
- **cookie-parser**: Handling cookies in requests.
- **CORS**: Configuration of cross-origin resource sharing between client and server.
- **dotenv**: Environment variable management.
- **express-fileupload**: File upload management.
- **fs-extra**: Advanced file system manipulation.
- **jsonwebtoken**: Generation and verification of JWT tokens.
- **morgan**: HTTP request logger.
- **zod**: Data validation.

## 🚀 Main Features

- **User registration and login**: Client authentication using JWT and secure password storage with bcrypt.
- **Product management**: CRUD operations for products, including descriptions, categories, prices, and stock.
- **Shopping cart and orders**: Shopping cart implementation, order creation, and stock updates.
- **Image uploads**: Upload and management of user and product images using Cloudinary.
- **Authorization and roles**: Access control for administrators and clients.
- **User profile**: Clients can update personal information and change their profile picture.

## 🛠️ Setup and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/veterinary-ecommerce-backend.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory with the following structure:

   ```plaintext
   # ==== Ports ====
   PORT=your_port

   # ==== Cors ====
   CORS_ORIGIN=your_frontend_url

   # ==== Key Secret ====
   JWT_SECRET=your_secret_key

   # ==== Cloudinary ====
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # ==== Database ====
   DATABASE_URL="mysql://user:password@localhost:3306/database_name"
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev --name migration_name
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

## 📂 Project Structure

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

## 📝 Additional Notes

- Make sure to properly configure the database credentials in the `.env` file.
- To deploy this backend on a server, you can use **Docker**, **Heroku**, **Vercel**, or any other service that supports Node.js.
