import { QueryResult } from "pg";
import { connectionDB } from "../database/dbconnection.js";
import { card } from "../protocols.js";

export async function customerAlreadyHaveCheck(customerId:Number){
    const response = await connectionDB.query('SELECT * FROM checks WHERE "customer-id"=$1',[customerId])

    if(response.rowCount !== 0){
        throw new Error("Customer already has one active check")
    }
}

export async function cardAlreadyInUse(cardId:Number){
    const response:QueryResult<card> = await connectionDB.query('SELECT * FROM cards WHERE "id"=$1',[cardId])

    if(response.rowCount === 0){
        throw new Error("Card number is invalid")
    } else if(response.rows[0].inUse === true){
        throw new Error("Card is already in use")
    }
}

export async function invalidCheck(cardId:Number){
    const response = await connectionDB.query('SELECT * FROM checks WHERE "card-id"=$1',[cardId])

    if(response.rowCount === 0){
        throw new Error("invalid Card number")
    }
}