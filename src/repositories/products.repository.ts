import { connectionDB } from "../database/dbconnection.js";

export async function insertOneProduct(name:Text, price: Number){
    await connectionDB.query("INSERT INTO products (name,price) VALUES ($1,$2)", [name,price])
}

export async function patchOneProductPrice(productId: Number, price: Number){
    await connectionDB.query("UPDATE products SET price=$1 WHERE id=$2",[price, productId])
}