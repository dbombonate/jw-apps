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
      return res.status(400).send({ erro: error.message})
    };
  };

  async register(req,res) {
    try {
      const publisherType = await PublisherType.create(req.body);
      return res.send({ publisherType });
    } catch (error) {
      console.log({
        erro: error.message
      });
      return res.status(400).send({ erro: error.message})
    };
  };

  async remove(req,res) {
    const { id } = req.params;
    try {
      const deletedType = await PublisherType.deleteOne({_id: id});
      return res.status(200).send({message: 'Publisher type removed!', deletedType});
     } catch (error) {
      console.log({
        erro: error.message
      });
      return res.status(400).send({ erro: error.message});
    };
  };

  async update(req,res) {
    try {
      const { id } = req.params;
      const updatedTypeData = await PublisherType.replaceOne({_id: id}, req.body);
      const updatedType = await PublisherType.findOne({_id: id});
      return res.status(200).send({ updatedType, updatedTypeData });
    } catch (error) {
      console.log({
        erro: error.message
      });
      return res.status(400).send({ erro: error.message});
    };
  };
};

module.exports = new PublisherTypeController();
