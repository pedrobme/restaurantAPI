import { connectionDB } from "../database/dbconnection.js";

export async function insertOneOrder(cardId: Number, productId: Number, amount: Number){
    const response = await connectionDB.query('SELECT "id" FROM  checks WHERE "card-id"=$1', [cardId])
    if(response.rowCount ===0){
        throw new Error("invalid card id")
    } else{
        const checkId = response.rows[0].id

        await connectionDB.query('INSERT INTO orders ("check-id", "product-id", amount) VALUES ($1,$2,$3)', [checkId, productId, amount])
    }
}

export async function deleteOrderByCardId(cardId: Number){
    await connectionDB.query(`delete from orders where orders."check-id"=(select checks.id from checks where checks."card-id"=$1);`,[cardId])
}