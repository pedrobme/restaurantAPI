import { Request, Response } from "express";
import { insertOneCard } from "../repositories/cards.repository.js";

export async function createOneCard(req:Request, res:Response){
    try {
        await insertOneCard()
        res.status(201).send("Card Created")
    } catch (error) {
        res.status(500).send("unexpected error")
    }
}