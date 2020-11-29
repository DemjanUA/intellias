const path = require('path');
const jsonfile = require('jsonfile');
const CacheService = require('../utils/CacheService');

const filePath = path.resolve(__dirname, '..', 'data', 'promotion.json');
const ttl = 5 * 60 * 1;
const cache = new CacheService(ttl);

class PromotionResource {
  async get(query) {
    const key = `getPromotion_${JSON.stringify(query)}`;

    return await cache.get(key, async function () {
      return jsonfile.readFile(filePath);
    });
  }

  async delete() {
    // ...
  }

  async update(promotion) {
    // ...
   }
}

const promotionResource = new PromotionResource();

module.exports = promotionResource;