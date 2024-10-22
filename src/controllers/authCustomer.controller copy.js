import { authCustomerService } from "../models/auth.model.js";
import { uploadImage } from "../lib/cloudinary.js";
import fs from "fs-extra";
export class authCustomerController {
  static async register(req, res) {
    const { id, email, username, password } = req.body;

    try {
      if (req.files?.image) {
        try {
          const result = await uploadImage(req.files.image.tempFilePath);
          console.log(
            "🚀 ~ authCustomerController ~ registerCustomer ~ result:",
            result
          );
          const imageUrl = result.secure_url;
          const publicId = result.public_id;
          console.log(
            "🚀 ~ authCustomerController ~ registerCustomer ~ publicId:",
            publicId
          );
          await authCustomerService.newCustomer(
            name,
            lastname,
            email,
            imageUrl,
            publicId
          );

          await fs.unlink(req.files.image.tempFilePath);
        } catch (error) {
          console.log(
            "🚀 ~ authCustomerController ~ registerCustomer ~ error:",
            error
          );
        }
      }

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

  static login(req, res) {
    const { email, password } = req.body;
  }
}
