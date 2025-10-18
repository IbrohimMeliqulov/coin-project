import Joi from "joi";



export const coins_collectionsValidation=Joi.object({
    collection_id:Joi.number().required(),
    coin_id:Joi.number().required(),
    condition:Joi.string().min(5).max(120).required(),
    note:Joi.string().required()
})


export const coins_collectionsUpdateValidation=Joi.object({
    collection_id:Joi.number(),
    coin_id:Joi.number(),
    condition:Joi.string().min(5).max(120),
    note:Joi.string()
})