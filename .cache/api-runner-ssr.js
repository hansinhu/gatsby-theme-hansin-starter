var plugins = [{
      plugin: require('/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"example","short_name":"example","start_url":"/","background_color":"#fa4946","theme_color":"#fa4946","display":"minimal-ui","icon":"/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/gatsby-theme-hansin/site/images/favicon.png"},
    },{
      plugin: require('/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/gatsby-theme-hansin/site/layouts/layout.tsx"},
    },{
      plugin: require('/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/gatsby-theme-hansin/gatsby-ssr'),
      options: {"plugins":[],"theme":{"primary-color":"#fa4946"}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
