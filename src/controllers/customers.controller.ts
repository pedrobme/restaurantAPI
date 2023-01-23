import { Request, Response } from "express";
import { addOneCustomer } from "../repositories/customers.repository.js";
import { userAlreadyExists } from "../services/customers.service.js";

export async function createOneCustomer(req:Request, res:Response){
    try {
        if(await userAlreadyExists(req.body.cpf) === false){
            await addOneCustomer(req.body.name, req.body.cpf, req.body.email)
            res.status(201).send("Customer Created")
        }
    } catch (error) {
        console.log(error)
        if(error.message = "customer already exists"){
            res.status(409).send("customer already exists")
    } else{
        res.status(500).send("Unexpected Error")
    }
}
}