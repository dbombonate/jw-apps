const Group = require('../models/Group');

class GroupsController {
  async list(req, res) {
    const groups = await Group.find();
    if (groups.length === 0) return res.send({ message: 'There are no groups to show!'});
    return res.status(200).send({
      groups
    });
  }

  async register(req,res) {
    const group = await Group.create(req.body);
    return res.send(group);

  }
}

module.exports = new GroupsController();