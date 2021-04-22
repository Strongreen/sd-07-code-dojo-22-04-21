const { tokenIsValid } = require('../services/authService');

const authMiddleware = (req, res, next) => {
    const token = req.headers.teste;

    if (token === undefined) {
        return res.status(401).send();
    }

    if (tokenIsValid(token)) {
        return next();
    }

    return res.status(401).send();
};

module.exports = authMiddleware;