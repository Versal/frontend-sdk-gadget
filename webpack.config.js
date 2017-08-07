require('babel-register')

const { configureWebpack } = require('@versal/config-helpers')

module.exports = configureWebpack('sdk-gadget', {
  namespaceCss: true,
  externalizeCommonLibraries: true
})
