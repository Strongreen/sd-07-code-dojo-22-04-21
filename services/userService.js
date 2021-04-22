const validUser = { user: '123', password: '123', isAdmin: true };

const userIsValid = (userName, password) => {
    return userName === validUser.user && password === validUser.password;
};

module.exports = { userIsValid };