import Joi from "joi";



export const collection_tagsValidation=Joi.object({
    collection_id:Joi.number().required().message("collection_id should be number"),
    tag_id:Joi.number().required().message("tag_id should number")
})


export const collection_tagsUpdateValidation=Joi.object({
    collection_id:Joi.number().message("collection_id should be number"),
    tag_id:Joi.number().message("tag_id should number")
})