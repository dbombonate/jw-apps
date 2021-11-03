const PublisherType = require('../models/PublisherType');

class PublisherTypeController {
  async list(req, res) {
    const publisherTypes = await PublisherType.find();
    if (publisherTypes.length === 0) return res.send({ message: 'There are no publisher types to show!'});
    return res.status(200).send({ publisherTypes });
  }

  async register(req,res) {
    const publisherType = await PublisherType.create(req.body);
    return res.send(publisherType);

  }
}

module.exports = new PublisherTypeController();