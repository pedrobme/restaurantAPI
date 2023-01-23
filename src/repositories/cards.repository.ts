import { connectionDB } from "../database/dbconnection.js";

export async function insertOneCard(){
    await connectionDB.query('INSERT INTO cards ("inUse") VALUES (false)');
}