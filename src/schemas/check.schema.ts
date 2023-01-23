import Joi from "joi"
import { check } from "../protocols.js"

export const checkSchema = Joi.object<check>(
    {
        "card-id": Joi.number().required(),
        "customer-id": Joi.number().required(),
        finishedAt: Joi.date(),
        createdAt: Joi.date()
    }
)
