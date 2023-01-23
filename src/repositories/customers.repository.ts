import { QueryResult } from "pg";
import { connectionDB } from "../database/dbconnection.js";
import {customer} from "../protocols.js"

export async function findCustumerByCPF(cpf:string){
    const response: QueryResult<customer> = await connectionDB.query("SELECT * FROM customer WHERE cpf=$1",[cpf])

    if(response.rowCount !== 0){
        return response.rows[0]
    }

    return null
}

export async function addOneCustomer(name: string, cpf:string, email:string){
    await connectionDB.query("INSERT INTO customer (name,cpf,email) VALUES ($1,$2,$3)", [name, cpf, email])
}