import Joi from "joi";
import Joi4 from "joi";



export const tagsValidation=Joi.object({
    name:Joi.string().min(5).max(120).required()
})


export const tagsUpdateValidation=Joi.object({
    name:Joi.string().min(5).max(120)
})