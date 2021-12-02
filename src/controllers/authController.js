require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const isEmail = require('isemail');
const passwordValidator = require('../config/password');

const User = require('../models/User');

function generateToken(prm = {}){
  return jwt.sign(prm, process.env.SECRET, {
    expiresIn: 864000
  });
};

class AuthController {
  async register(req,res){
      try {
        const { name, email, password } = req.body;
        if (!name) {
          return res.status(400).send({ alert: 'Name is Invalid.'});
        };
        if (!isEmail.validate(email)){
          return res.status(400).send({ alert: 'Email is invalid, enter a valid email.'});
        };
        if (!passwordValidator.validate(password)){
          return res.status(400).send({ alert: 'Password is invalid, enter a valid password with 8 or more digits and without spaces.'});
        }
        const userSave = await User.create(req.body);
        return res.send({
          userSave,
          token: generateToken({id: userSave.id})
        });
      } catch (error) {
        console.log({ erro: error.message });
        return res.status(400).send({ erro: error.message });
      };
    };

  async login(req,res){
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(400).send({erro: "User not found"});
      };
      if (!await bcrypt.compare(password, user.password)){
        return res.status(400).send({erro: "Password is incorrect."});
      };

      return res.status(200).send({
        user,
        token: generateToken({id: user.id})
      });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    };
  };
};

module.exports = new AuthController();
