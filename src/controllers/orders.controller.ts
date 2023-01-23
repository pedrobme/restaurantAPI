import { Request, Response } from "express";
import { insertOneOrder } from "../repositories/orders.repository.js"

export async function createOneOrder(req:Request, res:Response){

    const cardId:Number = req.body["card-id"]
    const productId:Number = req.body["product-id"]
    const amount:Number = req.body["amount"]

    try {
        await insertOneOrder(cardId, productId, amount)
        res.status(201).send("order created")
    } catch (error) {
        console.log(error)
        if(error.message ==="invalid card id"){
            res.status(422).send("invalid card id")
        } else{
        res.status(500).send("Unexpected Error")
    }
}
}