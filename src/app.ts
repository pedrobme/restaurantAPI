import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { customersRouter } from "./routers/customer.router.js";
import { cardsRouter } from "./routers/card.router.js";
import { checksRouter } from "./routers/check.router.js";
import { ordersRouter } from "./routers/order.router.js";
import { productsRouter } from "./routers/product.router.js";
dotenv.config();

const server = express();
server.use(cors()).use(express.json()).use("/customers", customersRouter).use("/cards",cardsRouter).use("/checks", checksRouter).use("/orders", ordersRouter).use("/products", productsRouter)

const PORT = process.env.API_PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
