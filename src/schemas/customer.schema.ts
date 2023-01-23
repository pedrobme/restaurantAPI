import Joi from "joi"
import { customer } from "../protocols"

export const customerSchema = Joi.object<customer>(
    {
        name: Joi.string().required(),
        cpf: Joi.string().length(11).required(),
        email: Joi.string().email().required(),
        createdAt: Joi.date()
    }
)