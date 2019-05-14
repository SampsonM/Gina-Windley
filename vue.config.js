const Config = require('webpack-chain');
const config = new Config();

config.entry('main')
  .add('./dist/index.html')

module.exports = config.toConfig();
