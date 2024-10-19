import { authCustomerService } from "../models/customer.model.js";

export class authCustomerController {
  static async registerCustomer(req, res) {
    const { id, name, lastname, email } = req.body;

    try {
      await authCustomerService.newCustomer(name, email,lastname);

      return res.status(201).json({
        message: "Usuario registrado con éxito",
        user: { id, name, lastname, email },
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al registrar el usuario",
        error,
      });
    }
  }
}
