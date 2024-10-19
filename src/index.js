import app from "./app.js";
import { PORT } from "./config.js";
import { PrismaClient } from "@prisma/client";

// Crear una instancia de Prisma Client
const prisma = new PrismaClient();

const startServer = async () => {
  try {
    // Intentar conectar a la base de datos
    await prisma.$connect();
    console.log("✅ Conexión a la base de datos con Prisma exitosa");

    // Iniciar el servidor si la conexión es exitosa
    app.listen(PORT, () =>
      console.log(`🖥️  Servidor en 🌐 http://localhost:${PORT}`)
    );
  } catch (error) {
    // Si hay un error en la conexión, mostrar un mensaje de error
    console.error("❌ Error de inicio:", error.message || error);
  }
};

startServer();
