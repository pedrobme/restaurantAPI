import { findCustumerByCPF } from "../repositories/customers.repository.js";

async function userAlreadyExists(cpf: string){
    const customerExists = await findCustumerByCPF(cpf)

    if(customerExists !== null){
        throw new Error("customer already exists");
    } else {
        return false
    }
}

export {userAlreadyExists}