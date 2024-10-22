import { authModel } from "../models/auth.model.js";
import bcrypt from "bcrypt";
import i18next from "i18next"; // Asegúrate de que esta línea esté presente

export class authController {
  static async register(req, res) {
    const { email, username, password, confirmPassword } = req.body;
    console.log("Idioma detectado:", req.language); // Muestra el idioma detectado


    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: req.t("PASSWORDS_DO_NOT_MATCH"), // Aquí debe devolver el mensaje traducido
      });
    }

    try {
      // Verificar si el email ya está registrado
      const singleEmail = await authModel.findCustomerByEmail(email);
      if (singleEmail) {
        return res.status(400).json({
          message: req.t("EMAIL_FOUND"), // Devolver mensaje traducido
        });
      }

      // Verificar si el username ya está registrado
      const singleUsername = await authModel.findCustomerByUsername(username);
      if (singleUsername) {
        return res.status(400).json({
          message: req.t("USERNAME_FOUND"), // Devolver mensaje traducido
        });
      }

      // Encriptar la contraseña
      const passwordHash = await bcrypt.hash(password, 10);

      // Registrar el nuevo usuario
      await authModel.register(email, username, passwordHash);

      // Respuesta de éxito
      return res.status(201).json({
        message: req.t("USER_REGISTERED_SUCCESS"), // Mensaje de éxito traducido
        user: { email, username },
      });
    } catch (error) {
      console.error("❌ Error al registrar el usuario:", error);
      return res.status(500).json({
        message: req.t("ERROR_REGISTERING_USER"), // Mensaje de error traducido
        error,
      });
    }
  }
}
