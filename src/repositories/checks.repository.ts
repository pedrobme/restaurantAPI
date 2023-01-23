import { connectionDB } from "../database/dbconnection.js";

export async function insertOneCheck(cardId: Number, customerId: Number){
    await connectionDB.query('INSERT INTO checks ("card-id", "customer-id") VALUES ($1,$2)',[cardId, customerId])
}