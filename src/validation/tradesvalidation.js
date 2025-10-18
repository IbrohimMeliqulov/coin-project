import Joi from "joi";



export const tradesValidation=Joi.object({
    from_user_id:Joi.number().required().message("from_user_id should number"),
    to_user_id:Joi.number().required().message("to_user_id should number"),
    coin_id:Joi.number().required(),
    status:Joi.string().required()
})


export const tradesUpdateValidation=Joi.object({
    from_user_id:Joi.number().message("from_user_id should number"),
    to_user_id:Joi.number().message("to_user_id should number"),
    coin_id:Joi.number(),
    status:Joi.string()
})