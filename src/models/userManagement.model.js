import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class userManagementModel {
  static async createUser(
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
  ) {
    try {
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          username: username,
          role: role,
          password: password,
          profileImage: {
            create: {
              image_url: image_url,
              public_id: public_id,
            },
          },
          dataExtra: {
            create: {
              phone: phone,
              address: address,
              city: city,
              country: country,
              postalCode: postalCode,
            },
          },
        },
      });
    } catch (error) {
      console.log("🚀 ~ userManagementModel ~ createUser ~ error:", error);
    }
  }

  static async getUser() {
    // Lógica para obtener un usuario por ID
  }

  static async updateUser() {
    // Lógica para actualizar un usuario
  }

  static async deleteUser() {
    // Lógica para eliminar un usuario
  }

  static async getAllUsers() {
    // Lógica para obtener todos los usuarios
  }
  static async searchUsers() {
    // Lógica para buscar usuarios
  }
}
