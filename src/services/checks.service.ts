import { connectionDB } from "../database/dbconnection.js";

export async function customerAlreadyHaveCheck(customerId:Number){
    const response = await connectionDB.query('SELECT * FROM checks WHERE "customer-id"=$1',[customerId])

    if(response.rowCount !== 0){
        throw new Error("Customer already has one active check")
    }
}

export async function cardAlreadyInUse(cardId:Number){
    const response = await connectionDB.query('SELECT * FROM checks WHERE "card-id"=$1',[cardId])

    if(response.rowCount !== 0){
        throw new Error("Card is already in use")
    }
}