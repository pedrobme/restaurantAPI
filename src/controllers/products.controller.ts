import { Request, Response } from "express";
import { insertOneProduct, patchOneProductPrice } from "../repositories/products.repository.js";

export async function createOneProduct(req:Request, res: Response){
    try {
        const productName = req.body.name
        const productPrice = req.body.price

        await insertOneProduct(productName,productPrice)
        res.status(201).send("product created")
    } catch (error) {
     console.log(error)
     res.status(500).send("unexpected error")   
    }
}

export async function updateOneProductPrice(req:Request, res: Response){
    try {
        const productPrice = req.body.price
        const productId = Number(req.params.id)

        await patchOneProductPrice(productId, productPrice)
        res.status(201).send("product price updated")
    } catch (error) {
     console.log(error)
     res.status(500).send("unexpected error")   
    }
}