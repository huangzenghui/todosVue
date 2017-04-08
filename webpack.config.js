const DevWebpack = require('./config/webpack.dev');
const ProdWebpack = require('./config/webpack.prod');
const TestWebpack = require('./config/webpack.test');

switch (process.env.NODE_ENV) {
  case 'dev':
    module.exports = DevWebpack;
    break;
  case 'production':
    module.exports = ProdWebpack;
    break;
  case 'tests':
    module.exports = TestWebpack;
    break;
  default:
    module.exports = DevWebpack;
}