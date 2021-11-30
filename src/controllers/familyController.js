const Family = require('../models/Family');

class FamilyController{
  async list(req, res) {
    try {
      const familyList = await Family.find();
      if(familyList.length === 0) {
        return res.status(200).send({ message: "There are no families to show." });
      };
      return res.status(200).send({ familyList });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async listById(req, res) {
    const id = req.params.id;
    if(!id) return res.status(400).send({ message: "Invalid family id." });
    try {
      const familyListed = await Family.findOne({ _id: id});
      return res.status(200).send({ familyListed });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async create(req, res) {
    try {
      const family = req.body;
      if(!family) return res.status(400).send({ message: "Invalid family name." });
      const familyCreated = await Family.create(family);
      return res.status(200).send({ familyCreated });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    if(!id) return res.status(400).send({ message: "Invalid family id." });
    try {
      const familyDelete = await Family.findOneAndDelete({ _id: id});
      return res.status(200).send({ familyDelete });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    if(!id) return res.status(400).send({ message: "Invalid family id." })
    try {
      const update = await Family.findOneAndUpdate({ _id: id}, req.body);
      return res.status(200).send({ update });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }
}

module.exports = new FamilyController();
