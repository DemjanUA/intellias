const vendorsResource = require('../resources/VendorsResource');

class VendorsController {
  async getAll(req, res) {
    res.send(
      await vendorsResource.getAll()
    )
  }

  async create(req, res) {
    // ...
  }

  async delete(req, res) {
    // ...
  }
}

const vendorsController = new VendorsController();

module.exports = vendorsController;