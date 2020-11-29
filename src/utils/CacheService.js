const NodeCache = require('node-cache');

class CacheService {
  constructor(ttl) {
    this.cache = new NodeCache({ stdTTL: ttl, checkperiod: ttl * 0.2, useClones: false });
  }

  async get(key, storeFunction) {
    const value = this.cache.get(key);

    if (value) {
      return Promise.resolve(value);
    }

    const result = await storeFunction();

    if (result) {
      this.cache.set(key, result);
    }

    return result;
  }

  del(keys) {
    this.cache.del(keys);
  }

  delStartWith(startStr = '') {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();

    for (const key of keys) {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    }
  }

  flush() {
    this.cache.flushAll();
  }
}


module.exports = CacheService;