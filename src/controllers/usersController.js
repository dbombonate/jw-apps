const User = require('../models/User');
const isEmail = require('isemail');

class UserController {

  async register(req,res) {
    try {
      const { name, email, password } = req.body;
      if (!isEmail.validate(email)){
        return res.status(400).send({ alert: 'Email is invalid, enter a valid email.'});
      };
      const userSave = await User.create(req.body);
      return res.send({ userSave });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    };
  };
};

module.exports = new UserController();
