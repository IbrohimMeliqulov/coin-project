export const ErrorHandler = (err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    let message = "Internal server error"
    if (err.status === 404) message = "Not found"
    if (err.status === 400) message = "Bad request"
    res.status(status).send({
        success: false,
        message: err.message || err.detail || err.hint
    })
}

export default ErrorHandler