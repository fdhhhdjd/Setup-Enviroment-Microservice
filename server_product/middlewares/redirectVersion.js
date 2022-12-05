exports.redirectVersion = payload => {
    return (req, res, next) => {
        const that = this;
        const version = req.headers['x-github-api-version'] || null;
        if (!payload[version]) {
            return res.status(503).json({
                status: 503,
                message: 'Api Fail'
            })
        }
        return payload[version].call(that, req, res, next)
    }
}

