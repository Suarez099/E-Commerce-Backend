import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";
import "./models/customer.model.js"

const startServer = () => {
  try {
    app.listen(PORT, () =>
      console.log(`🖥️  Servidor en 🌐 http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Error de inicio:", error.message || error);
  }
};
const initApp = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("✅🗄️ Conexión exitosa a la base de datos.");
    startServer();
  } catch (error) {
    console.error("❌ Error de conexión:", error.message || error);
  }
};

initApp();
