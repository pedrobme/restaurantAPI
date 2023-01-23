import {Router} from "express";
import { createOneCustomer } from "../controllers/customers.controller.js";
import { validateSchema } from "../middlewares/schemaValidation.middleware.js";
import { customerSchema } from "../schemas/customer.schema.js";

const customersRouter = Router();

customersRouter.post("/create", validateSchema(customerSchema), createOneCustomer)

export { customersRouter }