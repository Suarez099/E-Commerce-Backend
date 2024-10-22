import { Router } from "express";
import { fileUploadMiddleware } from "../middlewares/fileUpload.js";
import { authController } from "../controllers/authCustomer.controller.js";
import {validateSchema} from "../middlewares/validator.middleware.js"
import {registerSchema} from "../schemas/auth.schemas.js"

const router = Router();

router.post("/register",validateSchema(registerSchema), authController.register);

export default router;
