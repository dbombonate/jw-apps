const Publisher = require('../models/Publisher');

class PublisherController{
  async list(req,res) {
    try {
      if (id) {
        const publishers = await Publisher.find();
        return res.status(200).send({ publishers });
      } else {

        if (publishers.length === 0) return res.send({ message: 'There are no groups to show!'});
        return res.status(200).send({
          g
        });
      };
    } catch (error) {
      console.log({erro: error.message});
      res.status(400).send({erro: error.message});
    };
  }
};

module.exports = new PublisherController();
