import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class authModel {
  static async register(email, username, password) {
    try {
      const registerUser = await prisma.user.create({
        data: {
          email: email,
          username: username,
          password: password,
        },
        select: { email: true, username: true },
      });
      return registerUser;
    } catch (error) {
      console.error("Error al registrar el usuario:", error.message);
      throw new Error("No se pudo registrar el usuario. Intenta nuevamente.");
    }
  }

  static async findCustomerByEmail(email) {
    try {
      const singleEmail = await prisma.user.findUnique({
        where: { email: email },
        select: { email: true },
      });

      return singleEmail;
    } catch (error) {
      console.error("❌ Error al buscar usuario por email:", error.message);
      throw new Error("Error al buscar el usuario por email.");
    }
  }

  static async findCustomerByUsername(username) {
    try {
      const singleUsername = await prisma.user.findUnique({
        where: { username: username },
        select: { username: true },
      });

      return singleUsername;
    } catch (error) {
      console.error("❌ Error al buscar usuario por username:", error.message);
      throw new Error("Error al buscar el usuario por username.");
    }
  }
}
