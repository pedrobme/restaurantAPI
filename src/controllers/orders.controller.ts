import { Request, Response } from "express";
import { insertOneOrder } from "../repositories/orders.repository.js"

export async function createOneOrder(req:Request, res:Response){

    const checkId:Number = req.body["check-id"]
    const productId:Number = req.body["product-id"]
    const amount:Number = req.body["amount"]

    try {
        await insertOneOrder(checkId, productId, amount)
        res.status(201).send("order created")
    } catch (error) {
        console.log(error)
        res.status(500).send("Unexpected Error")
    }
}