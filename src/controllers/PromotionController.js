const promotionResource = require('../resources/PromotionResource');

class PromotionController {
  async get(req, res) {
    res.send(
      await promotionResource.get()
    )
  }

  async create(req, res) {
    // ...
  }

  async delete(req, res) {
    // ...
  }
}

const promotionController = new PromotionController();

module.exports = promotionController;