import { login, register } from "../controllers/auth.controller.js";

import { Router } from "express";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
