const Group = require('../models/Group');

class GroupsController {
  async list(req, res) {
    try {
      const groups = await Group.find();
      if (groups.length === 0) return res.send({ message: 'There are no groups to show!'});
      return res.status(200).send({
        groups
      });
    } catch (error) {
      console.log({erro: error.message});
      res.status(400).send({erro: error.message});
    };
  };

  async register(req,res) {
    try {
      const group = await Group.create(req.body);
      return res.send(group);
    } catch (error) {
      console.log({erro: error.message});
      res.status(400).send({erro: error.message});
    };
  };

};

module.exports = new GroupsController();
