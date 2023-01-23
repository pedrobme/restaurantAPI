import Joi from "joi"
import { order } from "../protocols.js"

export const orderSchema = Joi.object<order>(
    {
        "card-id": Joi.number().required(),
        "product-id": Joi.number().required(),
        amount: Joi.number().required()
    }
)