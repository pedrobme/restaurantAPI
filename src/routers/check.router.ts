import {Router} from "express";
import { createOneCheck } from "../controllers/checks.controller.js";
import { validateSchema } from "../middlewares/schemaValidation.middleware.js";
import {checkSchema} from "../schemas/check.schema.js"
 
const checksRouter = Router();

checksRouter.post("/create", validateSchema(checkSchema), createOneCheck)

export { checksRouter }