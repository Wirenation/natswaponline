import baseConfig from './default'
import config from './testnet'
import moment from 'moment-with-locales-es6'


export default {
  env: 'production',
  entry: 'testnet',
  local: 'local',
  dir: 'chrome-extension/application',
  isExtension: true,

  base: './',
  publicPath: `.${baseConfig.publicPath}`,

  time: moment(Date.now()).format('LLLL'),

  ...config,
}
