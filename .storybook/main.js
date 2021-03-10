const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/*.stories.[tj]sx',
    '../slices/**/*.stories.[tj]sx',
  ],
  // addons: ['@storybook/preset-typescript'],
  // Add nextjs preset
  presets: [path.resolve(__dirname, './next-preset.js')],
}
