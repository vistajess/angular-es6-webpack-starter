var path = require("path");
var webpack = require("webpack");
var stringify = require('stringify-object-values');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: __dirname + '/build/',
        filename: 'script.js'
    },
      module: {
        'ui-bootstrap$': 'angular-bootstrap',
        loaders: [
          {
            test: /\.(js|jsx|es6)$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.html$/,
            loader: "html"
          },
          { test: /\.css$/, loader: "style-loader!css-loader?root=." },
          { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
          { test: /\.useable\.css$/, loader: "style/useable!css" },
          {test: /src.*\.js$/, loaders: ['ng-annotate']}
        ]
      },
      htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/]
      },
      resolve: {
          alias: { 'ui-bootstrap$': 'angular-bootstrap' },
        extensions: ['', '.js', '.json', '.jsx', '.es6', '.css', '.html']
      },

      plugins: [
        new webpack.DefinePlugin({ 'process.env': stringify(process.env) }),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            screw_ie8: true,
            warnings: false
          },
          mangle: {
            screw_ie8: true
          },
          output: {
            comments: false,
            screw_ie8: true
          }
        })
      ],
};