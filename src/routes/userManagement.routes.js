import { Router } from "express";
import { userManagementController } from "../controllers/userManagement.Controller.js";

const router = Router();

router.post("/createUser", userManagementController.createUser);

export default router;
