module.exports = [{
      plugin: require('../../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"example","short_name":"example","start_url":"/","background_color":"#fa4946","theme_color":"#fa4946","display":"minimal-ui","icon":"/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/gatsby-theme-hansin/site/images/favicon.png"},
    },{
      plugin: require('../../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/hansin/myfile/myweb/Npm/gatsby-theme-hansin-lib/gatsby-theme-hansin/site/layouts/layout.tsx"},
    },{
      plugin: require('../../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#fa4946"},
    },{
      plugin: require('../../gatsby-theme-hansin/gatsby-browser.js'),
      options: {"plugins":[],"theme":{"primary-color":"#fa4946"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
