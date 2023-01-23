import { connectionDB } from "../database/dbconnection.js";

export async function insertOneCheck(cardId: Number, customerId: Number){
    await connectionDB.query('INSERT INTO checks ("card-id", "customer-id") VALUES ($1,$2)',[cardId, customerId])
}

export async function getCardIdDetails(cardId:Number){
    const response = await connectionDB.query(`SELECT "customer-id", "card-id", "product-id","amount", price FROM(
	SELECT * FROM(
	((SELECT checks."customer-id", checks.id as "check-id", checks."card-id" FROM cards JOIN checks ON cards.id=checks."card-id") as q1
	JOIN
	orders ON q1."check-id"=orders."check-id") q2
	JOIN
	products ON q2."product-id"=products.id
	)
) q3
WHERE "card-id"=$1`, [cardId])

    return response.rows
}

export async function deleteCheckByCardId(cardId:Number){
	await connectionDB.query('DELETE FROM checks WHERE "card-id"=$1',[cardId])
}