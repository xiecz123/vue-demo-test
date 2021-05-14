const files = require.context('.', true, /index.vue$/)
const components = files
  .keys()
  .map(filePath => ({
    path: '/' + files(filePath).default.name,
    component: files(filePath).default
  }))

module.exports = components
