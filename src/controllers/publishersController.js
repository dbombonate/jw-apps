const Publisher = require('../models/Publisher');

class PublisherController {
  async list(req, res) {
    try {
      const publishers = await Publisher.find()
        .populate('group', 'name')
        .populate('publisherType', 'name')
        .populate('userId', 'name');
      if (publishers.length === 0)
        return res.send({ message: 'There are no publishers to show!' });
      return res.status(200).send({ publishers });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
  async listById(req, res) {
    try {
      const id = req.params;
      const publisher = await Publisher.findOne({ _id: id })
        .populate('group', 'name')
        .populate('publisherType', 'name')
        .populate('userId', 'name');
      return res.status(200).send({ publisher });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
  async create(req, res) {
    try {
      const { name, email, gender, group, publisherType, isFamilyHead, user } =
        req.body;
      const newPublisher = await Publisher.create(req.body);
      res.status(201).send({ newPublisher });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params;
      const publisher = await Publisher.deleteOne({ _id: id });
      return res.status(200).send({ message: 'Publisher Deleted.' });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
  async update(req, res) {
    try {
      const { name, email, gender, group, publisherType, isFamilyHead } =
        req.body;
      const id = req.params;
      const publisher = await Publisher.updateOne({ _id: id });
      return res.status(200).send({ publisher });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
}

module.exports = new PublisherController();
