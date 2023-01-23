import {Router} from "express";
import { createOneCard } from "../controllers/cards.controller.js";

const cardsRouter = Router();

cardsRouter.post("/create", createOneCard)

export { cardsRouter }