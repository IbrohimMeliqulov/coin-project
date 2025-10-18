
export const validationfactory = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body)
    if (error) {
        const errors = error.details.map((err) => ({
            field: err.path.join(','),
            message: err.message
        }))
        return res.status(422).send({ errors })
    }
    next()
}

export const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
        return res.status(400).send({ message: result.error.details })
    }
    next()
}
