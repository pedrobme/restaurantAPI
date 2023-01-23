import { Request, Response } from "express";
import { insertOneCheck } from "../repositories/checks.repository.js";
import { cardAlreadyInUse, customerAlreadyHaveCheck } from "../services/checks.service.js";

export async function createOneCheck(req:Request, res:Response){
    const cardId:Number = req.body["card-id"]
    const customerId:Number = req.body["customer-id"]
    try {
        await customerAlreadyHaveCheck(customerId)
        await cardAlreadyInUse(cardId)
        await insertOneCheck(cardId, customerId)
        res.status(201).send("Check Created")
    } catch (error) {
        console.log(error)
        if(error.message === "Customer already has one active check"){
            res.status(409).send("Customer already has one active check")
        }else if(error.message === "Card is already in use"){
            res.status(409).send("Card is already in use")
        } else{
            res.status(500).send("unexpected error")
        }
    }
}