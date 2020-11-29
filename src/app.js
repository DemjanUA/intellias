const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./utils/logger');
const config = require('./config');

const products = require('./routes/products');
const vendors = require('./routes/vendors');
const promotion = require('./routes/promotion');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', products);
app.use('/vendors', vendors);
app.use('/promotion', promotion);

app.all('/', (req, res) => {
  res.send('Server is working!');
})

app.listen(config.PORT, () => logger.log(`Listening on port ${config.PORT}`));