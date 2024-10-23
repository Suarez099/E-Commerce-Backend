import { authModel } from "../models/auth.model.js";
import bcrypt from "bcrypt";

export class authController {
  static async register(req, res) {
    const { email, username, password, confirmPassword } = req.body;

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      return res.status(400).json(["contraseñas no coinciden"]);
    }

    try {
      // Verificar si el email ya está registrado
      const singleEmail = await authModel.findCustomerByEmail(email);
      if (singleEmail) {
        return res.status(400).json(["email ya registrado"]);
      }

      // Verificar si el username ya está registrado
      const singleUsername = await authModel.findCustomerByUsername(username);
      if (singleUsername) {
        return res.status(400).json(["username ya registrado"]);
      }

      // Encriptar la contraseña
      const passwordHash = await bcrypt.hash(password, 10);

      // Registrar el nuevo usuario
      await authModel.register(email, username, passwordHash);

      // Respuesta de éxito
      return res.status(201).json({
        message: "Usuario registrado exitosamente",
        user: { email, username },
      });
    } catch (error) {
      console.error("❌ Error al registrar el usuario:", error);
      return res.status(500).json({
        message: "Error al registrar el usuario",
        error,
      });
    }
  }
}
