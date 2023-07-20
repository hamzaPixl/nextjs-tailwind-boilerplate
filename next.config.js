const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withImages = require('next-images')

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPlugins([optimizedImages, withPWA, withImages], {
  i18n: {
    locales: ['en', 'nl', 'fr'],
    defaultLocale: 'en',
  },
})
