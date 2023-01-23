export type customer = {
    name:string,
    cpf:string,
    email:string,
    createdAt:Date
}

export type card = {
    inUse:boolean
}

export type check = {
    createdAt:Date,
    finishedAt:Date,
    "card-id":number,
    "customer-id": number
}

export type order = {
    "check-id":Number,
    "product-id": Number,
    amount: Number
}