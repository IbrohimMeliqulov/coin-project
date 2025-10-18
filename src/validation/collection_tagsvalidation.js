import Joi from "joi";



export const collection_tagsValidation=Joi.object({
    collection_id:Joi.number().required(),
    tag_id:Joi.number().required()
})


