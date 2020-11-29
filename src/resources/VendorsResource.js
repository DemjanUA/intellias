const path = require('path');
const jsonfile = require('jsonfile');
const CacheService = require('../utils/CacheService');

const filePath = path.resolve(__dirname, '..', 'data', 'vendors.json');
const ttl = 5 * 60 * 1;
const cache = new CacheService(ttl);

class VendorsResource {
  async getAll(query) {
    const key = `getVendors_${JSON.stringify(query)}`;

    return await cache.get(key, async function () {
      return jsonfile.readFile(filePath);
    });
  }

  async create(vendor) {
    // ...
  }

  async delete(name) {
    // ...
  }
}

const vendorsResource = new VendorsResource();

module.exports = vendorsResource;