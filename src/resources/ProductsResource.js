const path = require('path');
const jsonfile = require('jsonfile');
const { find } = require('lodash');
const CacheService = require('../utils/CacheService');

const filePath = path.resolve(__dirname, '..', 'data', 'products.json');
const ttl = 5 * 60 * 1;
const cache = new CacheService(ttl);


class ProductsResource {
  async getAll(query) {
    const key = `getAllProducts_${JSON.stringify(query)}`;

    return await cache.get(key, async function () {
      return jsonfile.readFile(filePath);
    });
  }

  async getById(id) {
    const key = `getProductById_${id}`;

    return await cache.get(key, async function () {
      const products = await jsonfile.readFile(filePath);
    
      return find(products, { id });
    });
  }

  async create(product) {
    // ...
  }

  async delete(id) {
    // ...
  }

  async update(id, product) {
   // ...
  }
}

const productsResource = new ProductsResource();

module.exports = productsResource;