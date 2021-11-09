const passValid = require('password-validator');

var properties = new passValid();

properties
.is().min(6)
.is().max(14)
.has().digits()
.has().letters()
.has().not().spaces()
.is().not().oneOf(['Passw0rd', 'Password123', '123456']);

module.exports = properties;
