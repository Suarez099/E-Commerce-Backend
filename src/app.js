import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { handleNotFound } from "./middlewares/validateEndpoints.js";
import authCustomerRoutes from "./routes/authCustomer.routes.js";
import userManagementRoutes from "./routes/userManagement.Routes.js";
import { CORS_ORIGIN } from "./config.js";
import path from "path";
import { fileURLToPath } from "url";
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import i18nextMiddleware from "i18next-http-middleware";

// Configuración de path para trabajar con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Configuración de i18next
i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: "es", // Idioma por defecto
    preload: ["es", "en"], // Idiomas soportados
    backend: {
      loadPath: path.join(__dirname, "/locales/{{lng}}.json"), // Ruta a los archivos JSON de traducción
    },
    detection: {
      order: ["querystring", "cookie", "header"], // Orden de detección
      caches: ["cookie"], // Guardar idioma en cookie
    },
  });

// Middleware para inicializar i18n
app.use(i18nextMiddleware.handle(i18next));

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
app.use("/api", userManagementRoutes);
app.use(handleNotFound);

export default app;
