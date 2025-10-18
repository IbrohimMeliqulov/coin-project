import Joi from "joi";



export const commentsValidation=Joi.object({
    collection_id:Joi.number().required().message("collection_id should number"),
    user_id:Joi.number().message("user_id should number").required(),
    text:Joi.string().required().min(5).max(120)
})


export const commentsUpdateValidation=Joi.object({
    collection_id:Joi.number().message("collection_id should number"),
    user_id:Joi.number().message("user_id should number"),
    text:Joi.string().min(5).max(120)
})