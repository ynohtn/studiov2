const withTM = require('next-transpile-modules')([
  'next-slicezone',
  'essential-slices',
])

module.exports = withTM()

module.exports = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
}
