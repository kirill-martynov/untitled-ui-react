const postcssCustomMedia = require('postcss-custom-media');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssNested,
    postcssCustomMedia({
      importFrom: './src/styles/media.css',
    }),
  ],
};
