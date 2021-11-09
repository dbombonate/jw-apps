const PublisherType = require('../models/PublisherType');

class PublisherTypeController {

  async list(req, res) {
    try {
      const publisherTypes = await PublisherType.find();
      if (publisherTypes.length === 0) return res.send({ message: 'There are no publisher types to show!'});
      return res.status(200).send({ publisherTypes });
    } catch (error) {
      console.log({
        erro: error.message
      });
    }
  };

  async register(req,res) {
    try {
      const publisherType = await PublisherType.create(req.body);
      return res.send({ publisherType });
    } catch (error) {
      console.log({
        erro: error.message
      });
      return res.status(400).send({
        message: 'Type not registered'
      });
    }
  };

  async remove(req,res) {
    const id = req.params;
    try {
      const deletedGroup = await PublisherType.deleteOne({_id: id});
      return res.status(200).send({message: 'Group removed!'});
     } catch (error) {
      console.log({
        erro: error.message
      });
      return res.status(400).send({ message: 'Group not removed, try again later.'});
    }
  };

  async update(req,res) {
    try {
      const id = req.params;
      const updatedGroupData = await PublisherType.replaceOne({_id: id.id}, req.body);
      const updatedGroup = await PublisherType.findOne({_id: id.id});
      return res.status(200).send({ updatedGroup, updatedGroupData });
    } catch (error) {
      console.log({
        erro: error.message
      });
      return res.status(400).send({ message: error.message});
    }
  }
};

module.exports = new PublisherTypeController();
