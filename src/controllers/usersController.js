const User = require('../models/User');
const isEmail = require('isemail');
const passwordValidator = require('../config/password');

class UserController {

  async register(req,res) {
    try {
      const { name, email, password } = req.body;
      if (!isEmail.validate(email)){
        return res.status(400).send({ alert: 'Email is invalid, enter a valid email.'});
      };
      if (!passwordValidator.validate(password)){
        return res.status(400).send({ alert: 'Password is invalid, enter a valid password with 8 or more digits and without spaces.'});
      }
      const userSave = await User.create(req.body);
      return res.send({ userSave });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    };
  };

  async list(req,res) {
    const { id } = req.params;
    try{
      if (id) {
        const user = await User.findOne({_id: id});
        return res.status(200).send({ user });
      }
      const users = await User.find();
      return res.status(200).send({ users });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  };
};

module.exports = new UserController();
