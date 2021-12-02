const Report = require('../models/Report');

class ReportController{
  async list(req, res) {
    try {
      const reportList = await Report.find();
      if(reportList.length === 0) {
        return res.status(200).send({ message: "There are no reports to show." });
      };
      return res.status(200).send({ reportList });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async listByPublisher(req, res) {
    const id = req.params.id;
    if(!id) return res.status(400).send({ message: "Invalid publisher id." });
    try {
      const reportListed = await Report.find({ publisher: id });
      return res.status(200).send({ reportListed });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async create(req, res) {
    try {
      const report = req.body;
      if(!report) return res.status(400).send({ message: "Invalid report send." });
      const reportCreated = await Report.create(report);
      return res.status(200).send({ reportCreated });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    if(!id) return res.status(400).send({ message: "Invalid report id." });
    try {
      const reportDeleted = await Family.findOneAndDelete({ _id: id});
      return res.status(200).send({ message: "Report deleted" });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    if(!id) return res.status(400).send({ message: "Invalid report id." })
    try {
      const update = await Report.findOneAndUpdate({ _id: id}, req.body);

      return res.status(200).send({ message });
    } catch (error) {
      console.log({ erro: error.message });
      return res.status(400).send({ erro: error.message });
    }
  }
}

module.exports = new ReportController();
