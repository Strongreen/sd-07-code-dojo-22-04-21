const { userIsValid, generateAuthToken } = require('../services');

const login = (req, res) => {
    const { user, password } = req.body;

    if (userIsValid(user, password)) {
        const token = generateAuthToken(user, true);
        return res.status(200).json({ token });
    }
    return res.status(401).send();
};

module.exports = login;