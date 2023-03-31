import { Router } from "express";
import { toxicologicalTestSchema } from "@/schemas";
import { validateBody, authenticateToken } from "@/middlewares";
import { testStore, getAll } from "@/controllers/toxicologicalControllers"

const toxicologicalRoutes = Router();

toxicologicalRoutes
  .get("/all", [authenticateToken], getAll)
  .post("/toxicological", [validateBody(toxicologicalTestSchema), authenticateToken], testStore)

export default toxicologicalRoutes;