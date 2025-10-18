import Joi from "joi";



export const coins_collectionsValidation=Joi.object({
    collection_id:Joi.number().required().message("collection_id should number"),
    coin_id:Joi.number().required().message("coin_id should number"),
    condition:Joi.string().min(5).max(120).required(),
    note:Joi.string().required()
})


export const coins_collectionsUpdateValidation=Joi.object({
    collection_id:Joi.number().message("collection_id should number"),
    coin_id:Joi.number().message("coin_id should number"),
    condition:Joi.string().min(5).max(120),
    note:Joi.string()
})