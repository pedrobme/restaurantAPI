import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { customersRouter } from "./routers/customer.router.js";
dotenv.config();

const server = express();
server.use(cors()).use(express.json()).use("/customers", customersRouter);

const PORT = process.env.API_PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
