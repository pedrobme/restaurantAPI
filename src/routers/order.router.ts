import {Router} from "express";
import { createOneOrder } from "../controllers/orders.controller.js";
import { validateSchema } from "../middlewares/schemaValidation.middleware.js";
import { orderSchema } from "../schemas/order.schema.js";

const ordersRouter = Router();

ordersRouter.post("/create", validateSchema(orderSchema), createOneOrder)

export { ordersRouter }