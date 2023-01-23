import { connectionDB } from "../database/dbconnection.js";

export async function insertOneCard(){
    await connectionDB.query('INSERT INTO cards ("inUse") VALUES (false)');
}

export async function changeCardUsage(cardId:Number, usage: boolean){
    await connectionDB.query('UPDATE cards SET "inUse"=$1 WHERE "id"=$2',[usage, cardId])
}