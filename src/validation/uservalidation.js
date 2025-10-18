import { z } from "zod"

export const registerUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(20),
})


export const userUpdateValidation = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).max(20).optional()
})
