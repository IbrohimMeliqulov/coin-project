import Joi from "joi";



export const commentsValidation=Joi.object({
    collection_id:Joi.number().required(),
    user_id:Joi.number().required(),
    text:Joi.string().required().min(5).max(120)
})


export const commentsUpdateValidation=Joi.object({
    collection_id:Joi.number(),
    user_id:Joi.number(),
    text:Joi.string().min(5).max(120)
})