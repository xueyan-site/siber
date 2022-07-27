module.exports = {
  type: 'react-csr',
  index: 'zh',
  alias: {
    'ast': 'pub/ast',
    'com': 'pub/com',
    'utl': 'pub/utl',
    'siber': '../src'
  },
  module: {
    externals: {
      'typescript': 'ts',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'classnames': 'classNames',
      'lodash': '_'
    },
    rules: {
      raw: {
        test: /\.(txt|md)$/i
      }
    }
  },
  page: {
    metas: [
      {
        key: 'ie',
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        key: 'viewport',
        name: 'viewport',
        content: 'viewport-fit=cover,width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
      }
    ],
    links: [
      {
        key: 'favicon',
        rel: "icon",
        type: "image/png",
        href: "{{P_ASSETS_PATH}}favicon.png"
      }
    ],
    styles: [
      {
        key: 'global',
        rel: 'stylesheet',
        href: '{{P_ASSETS_PATH}}global.css'
      }
    ],
    scripts: [
      {
        key: 'typescript',
        defer: true,
        src: 'https://cdn.bootcdn.net/ajax/libs/typescript/4.6.4/typescript.min.js'
      },
      {
        key: 'react',
        defer: true,
        src: 'https://cdn.bootcdn.net/ajax/libs/react/16.14.0/umd/react.production.min.js'
      },
      {
        key: 'react-dom',
        defer: true,
        src: 'https://cdn.bootcdn.net/ajax/libs/react-dom/16.14.0/umd/react-dom.production.min.js'
      },
      {
        key: 'classnames',
        defer: true,
        src: 'https://cdn.bootcdn.net/ajax/libs/classnames/2.3.1/index.min.js'
      },
      {
        key: 'lodash',
        defer: true,
        src: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js'
      }
    ]
  }
}