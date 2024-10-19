import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class authCustomerService {
  static async newCustomer(name, email,lastname) {
    await prisma.customer.create({
      data: {
        name: name,
        email: email,
        lastname:lastname
      },
    });
  }
  static async Customers() {
    await prisma.customer.findMany();
  }
}
