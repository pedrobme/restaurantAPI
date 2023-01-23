import Joi from "joi"
import { product } from "../protocols.js"

export const productSchema = Joi.object<product>(
    {
        name: Joi.string().required(),
        price: Joi.number().required()
    }
)

export const priceSchema = Joi.object(
    {price: Joi.number().required()}
)