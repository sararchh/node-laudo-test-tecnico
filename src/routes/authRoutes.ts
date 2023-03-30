import { Router } from "express";
import { signInSchema, userSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { signIn, signUp } from "@/controllers/authControllers"

const authRoutes = Router();

authRoutes
  .post("/sign-up", [validateBody(userSchema)], signUp)
  .post("/sign-in", [validateBody(signInSchema)], signIn);

export default authRoutes;