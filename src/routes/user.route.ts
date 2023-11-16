import userController from "@/controllers/user.controller";
import { Router } from "express";

const UserRouter = Router();

UserRouter.get("/:id", userController.getUserById);

export default UserRouter;
