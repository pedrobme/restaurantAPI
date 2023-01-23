import { Request, Response } from "express";
import { getCardIdDetails, insertOneCheck } from "../repositories/checks.repository.js";
import { cardAlreadyInUse, customerAlreadyHaveCheck, invalidCheck } from "../services/checks.service.js";

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

export async function getCheckBalance(req:Request, res:Response){
    const cardId = req.body["card-id"]

    try {
        await invalidCheck(cardId)
        const checkDetails = await getCardIdDetails(cardId)

        let checkBalance = 0

        checkDetails.forEach((row) => {
            checkBalance += row.amount*row.price
        })

        res.status(200).send({balance: checkBalance})

    } catch (error) {
        console.log(error)
        if(error.message === "invalid Card number"){
            res.status(410).send("invalid Card number")
        } else{
            res.status(500).send("unexpected error")
        }
    }
}