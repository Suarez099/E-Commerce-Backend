import { userManagementModel } from "../models/userManagement.model.js";

export class userManagementController {
  static async createUser(req, res) {
    const {
      name,
      email,
      username,
      role,
      password,
      image_url,
      public_id,
      phone,
      address,
      city,
      country,
      postalCode,
    } = req.body;
    try {
      userManagementModel.createUser(
        name,
        email,
        username,
        role,
        password,
        image_url,
        public_id,
        phone,
        address,
        city,
        country,
        postalCode
      );
    } catch (error) {
      console.log("❌ Error", error);
    }
    return res.status(201).json({
      message: "User create sucescet",
      user: {  name, email, username, role, password },
    });
  }

  static async getUser(req, res) {
    // Lógica para obtener un usuario por ID
  }

  static async updateUser(req, res) {
    // Lógica para actualizar un usuario
  }

  static async deleteUser(req, res) {
    // Lógica para eliminar un usuario
  }

  static async getAllUsers(req, res) {
    // Lógica para obtener todos los usuarios
  }
  static async searchUsers(req, res) {
    // Lógica para buscar usuarios
  }
}
