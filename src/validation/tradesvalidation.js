import Joi from "joi";



export const tradesValidation=Joi.object({
    from_user_id:Joi.number().required(),
    to_user_id:Joi.number().required(),
    coin_id:Joi.number().required(),
    status:Joi.string().required()
})


export const tradesUpdateValidation=Joi.object({
    from_user_id:Joi.number(),
    to_user_id:Joi.number(),
    coin_id:Joi.number(),
    status:Joi.string()
})