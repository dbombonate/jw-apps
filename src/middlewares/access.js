const User = require('../models/User');

module.exports = async (req, res, next) => {
  const id = res.locals.user;
  const user = await User.findOne({ _id: id });
  if(!user) return res.status(403).send({ message: 'Expired token provided.'});

  if(!user.isAdmin) return res.status(403).send({ message: 'Access is denied.'})

  next();
}
