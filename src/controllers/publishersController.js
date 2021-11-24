const Publisher = require('../models/Publisher');
const Group = require('../models/Group');
const PublisherType = require('../models/PublisherType');
const isEmail = require('isemail');

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
      const id = req.params.id;
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
      const { name, email, gender } = req.body;
      if(!name) return res.status(400).send({ message: 'Invalid name.'});
      if(!isEmail.validate(email)) return res.status(400).send({ message: 'Invalid email.'});
      if(gender !== 'male' && gender !== 'female') return res.status(400).send({ message: 'Invalid gender.'});
      const newPublisher = await Publisher.create(req.body);
      res.status(201).send({ newPublisher });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const publisher = await Publisher.deleteOne({ _id: id });
      return res.status(200).send({ message: 'Publisher Deleted.' });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
  async update(req, res) {
    try {
      const { name, email, gender } = req.body;
      const id = req.params.id;
      if(!await Publisher.findOne({ _id: id })) return res.status(401).send({ message: 'Invalid ID'});
      if(!name) return res.status(400).send({ message: 'Invalid name.'});
      if(!isEmail.validate(email)) return res.status(400).send({ message: 'Invalid email.'});
      if(gender !== 'male' && gender !== 'female') return res.status(400).send({ message: 'Invalid gender.'});
      const publisher = await Publisher.findOneAndUpdate({ _id: id }, req.body);
      return res.status(200).send({ publisher });
    } catch (error) {
      console.log({ erro: error.message });
      res.status(400).send({ erro: error.message });
    }
  }
}

module.exports = new PublisherController();
