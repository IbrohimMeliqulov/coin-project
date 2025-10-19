import Joi from "joi";



export const tagsValidation = Joi.object({
    name: Joi.string().min(5).max(120).required()
})

