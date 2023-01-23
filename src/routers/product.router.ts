import {Router} from "express";
import { createOneProduct, updateOneProductPrice } from "../controllers/products.controller.js";
import { validateSchema } from "../middlewares/schemaValidation.middleware.js";
import { priceSchema, productSchema } from "../schemas/product.schema.js";

const productsRouter = Router();

productsRouter.post("/create", validateSchema(productSchema), createOneProduct)

productsRouter.patch("/update/:id", validateSchema(priceSchema), updateOneProductPrice)

export { productsRouter }