import { Router } from "express";
import { fileUploadMiddleware } from "../middlewares/fileUpload.js";
import { authCustomerController } from "../controllers/authCustomer.controller.js";

const router = Router();

router.post(
  "/registerCustomer",
  fileUploadMiddleware,
  authCustomerController.registerCustomer
);

export default router;
