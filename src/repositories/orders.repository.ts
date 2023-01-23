import { connectionDB } from "../database/dbconnection.js";

export async function insertOneOrder(checkId: Number, productId: Number, amount: Number){
    await connectionDB.query('INSERT INTO orders ("check-id", "product-id", amount) VALUES ($1,$2,$3)', [checkId, productId, amount])
}

export async function deleteOrderByCardId(cardId: Number){
    await connectionDB.query(`delete from orders where orders."check-id"=(select checks.id from checks where checks."card-id"=$1);`,[cardId])
}