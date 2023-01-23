import {Router} from "express";
import { createOneCheck, finishCheck, getCheckBalance } from "../controllers/checks.controller.js";
import { validateSchema } from "../middlewares/schemaValidation.middleware.js";
import {checkSchema} from "../schemas/check.schema.js"
 
const checksRouter = Router();

checksRouter.post("/create", validateSchema(checkSchema), createOneCheck)
checksRouter.get("/balance/:cardid", getCheckBalance)
checksRouter.delete("/finish/:cardid",  finishCheck)

export { checksRouter }