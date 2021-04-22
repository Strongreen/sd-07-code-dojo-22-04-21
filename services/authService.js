const jwt = require('jsonwebtoken');

const SUPER_SENHA = '123';

const generateAuthToken = (userId, isAdmin) => {
    const token = jwt.sign({ userId, isAdmin }, SUPER_SENHA);

    return token;
};

const tokenIsValid = (token) => {
    try {
        jwt.verify(token, SUPER_SENHA);
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = { generateAuthToken, tokenIsValid };