import Joi from "joi";


export const collectionsValidation = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().min(5).max(120).required(),
    description: Joi.string().min(5).max(120).required()
})


export const collectionsUpdateValidation = Joi.object({
    user_id: Joi.number(),
    title: Joi.string().min(5).max(120),
    description: Joi.string().min(5).max(120)
})