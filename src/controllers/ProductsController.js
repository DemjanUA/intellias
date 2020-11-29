const productsResource = require('../resources/ProductsResource');

class ProductsController {
  async getAll(req, res) {
    res.send(
      await productsResource.getAll()
    )
  }

  async getById(req, res) {
    const id = req.params.id;
    const product = await productsResource.getById(id);

    try {
      if (product) {
        res.send(product);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
        res.sendStatus(500);
    }
  }

  async create(req, res) {
    // ...
  }

  async update(req, res) {
    // ...
  }

  async delete(req, res) {
    // ...
  }
}

const productsController = new ProductsController();

module.exports = productsController;