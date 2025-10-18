import {z} from "zod"


export const coinValidation=z.object({
    name:z.string(),
    country:z.string(),
    year:z.number(),
    material:z.string(),
    value:z.number()
})

export const coinUpdateValidation=z.object({
    name:z.string().optional(),
    country:z.string().optional(),
    year:z.number().optional(),
    material:z.string().optional(),
    value:z.number().optional()
})

