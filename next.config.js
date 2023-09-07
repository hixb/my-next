const path = require('node:path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withSass(
  withCSS({
    cssModules: true,
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname),
        '~': path.resolve(__dirname),
      }
      return config
    },
  }),
)

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

function regexEqual(x, y) {
  return x instanceof RegExp
  && y instanceof RegExp
  && x.source === y.source
  && x.global === y.global
  && x.ignoreCase === y.ignoreCase
  && x.multiline === y.multiline
}

module.exports = {
  optimizeFonts: false,
  reactStrictMode: true,
  webpack(config) {
    const sassRules = config.module.rules.find(rule => typeof rule.oneOf === 'object').oneOf.find(rule =>
      rule.sideEffects === false
      && regexEqual(rule.test, /\.module\.(scss|sass)$/),
    )
    sassRules.use = sassRules.use.map(rule =>
      rule.loader.includes('sass-loader')
        ? {
            ...rule,
            options: {
              ...rule.options,
              additionalData: '@import \'./styles/common/index.scss\';',
            },
          }
        : rule,
    )

    /* return new config to next */
    return config
  },

  distDir: 'dist',
}
