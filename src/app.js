import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { handleNotFound } from "./middlewares/validateEndpoints.js";
import authCustomerRoutes from "./routes/authCustomer.routes.js";
import { CORS_ORIGIN } from "./config.js";

const app = express();

// Configuración avanzada de CORS
app.use(
  cors({
    origin: [CORS_ORIGIN], // Permite múltiples orígenes
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true, // Permitir cookies y headers de autenticación en las peticiones
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "X-Requested-With",
      "Origin",
    ], // Lista completa de encabezados permitidos
    optionsSuccessStatus: 200, // Para manejar correctamente navegadores antiguos como IE
  })
);

app.disable("x-powered-by");

// Middleware de registro de peticiones HTTP
app.use(morgan("dev"));

// Middleware para interpretar JSON en las peticiones
app.use(express.json());

// Middleware para manejar cookies
app.use(cookieParser());

// Rutas de autenticación y tareas
app.use("/api", authCustomerRoutes);
app.use(handleNotFound);

export default app;
