import { customer } from "../models/customer.model.js";

export class authCustomerService {
  static async newCustomer(id, name, username, email, image, public_id) {
    await customer.create({
      id,
      name,
      username,
      email,
      image,
      public_id
    });
  }
}
