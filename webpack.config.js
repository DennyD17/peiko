var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var ManifestPlugin = require("webpack-manifest-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");

var minimize = process.argv.indexOf("--no-minimize") === -1;

var plugins = [];


if (minimize)
{
  plugins.push(new webpack.DefinePlugin(
  {
    "process.env":
    {
      "NODE_ENV": JSON.stringify("production")
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: true }, output: { comments: false } }));
  plugins.push(new webpack.optimize.DedupePlugin());
}

plugins.push(new webpack.NoErrorsPlugin());
plugins.push(new webpack.ProvidePlugin(
{
  $: "jquery",
  jQuery: "jquery"
}));
minimize && plugins.push(new ExtractTextPlugin("[name]-[hash].css", { allChunks: true }));
plugins.push(new webpack.optimize.CommonsChunkPlugin("vendor", "vendor-[hash].min.js"));
plugins.push(new BundleTracker({ filename: "./webpack-stats.json" }));

// prefetch
//plugins.push(new webpack.PrefetchPlugin("moment/moment.js"));
//plugins.push(new webpack.PrefetchPlugin("moment-timezone/index.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactReconcileTransaction.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactDOMComponent.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/Danger.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactDefaultPerf.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/SimpleEventPlugin.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/EnterLeaveEventPlugin.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactDefaultInjection.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactDOMServer.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactDOMSelection.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactInputSelection.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactReconciler.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/instantiateReactComponent.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/EventPluginHub.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactMarkupChecksum.js"));
//plugins.push(new webpack.PrefetchPlugin("react/node_modules/fbjs/lib/containsNode.js"));
//plugins.push(new webpack.PrefetchPlugin("react/node_modules/fbjs/lib/createNodesFromMarkup.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/ReactIsomorphic.js"));
//plugins.push(new webpack.PrefetchPlugin("react/lib/CSSPropertyOperations.js"));

// moment.js только ru локаль
plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/));

if (minimize)
{
  plugins.push(new ManifestPlugin());
  plugins.push(new ChunkManifestPlugin(
  {
    filename: "chunk-manifest.json",
    manifestVariable: "webpackManifest"
  }));
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports =
{
  node: {
    fs: "empty"
  },
  watch: true,
  context: path.join(__dirname, "base", "static"),
  watchOptions: {
        poll: true
    },
  entry: {
    "main": "./js/main.jsx",
    "mail-lock": "./js/mail-lock.jsx",
    "hot-games": "./js/hot-games.jsx",
    "user-migrate": "./js/user-migrate.jsx",
    "slider": "./js/slider.js",
    "vendor": [
      "jquery", "is-loading/jquery.isloading.js",
      "bootstrap-sass", "bootbox", "classnames",
      "react", "react-dom",
      "scriptjs"
    ]
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: minimize ? "babel" : "react-hot!babel" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.json$/, loader: "json" },
      { test: /\.css$/, loader: minimize ? ExtractTextPlugin.extract("style", "css!autoprefixer") : "style!css!autoprefixer" },
      { test: /\.scss$/, loader: minimize ? ExtractTextPlugin.extract("style", "css!autoprefixer!sass") : "style!css?sourceMap!autoprefixer!sass?sourceMap" },
      { test: /\.(jpe?g|png|gif)$/i, loader: "url?limit=10000!img?progressive=true&minimize=true" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: plugins,
  devtool: minimize ? "" : "eval-cheap-module-source-map",
  resolve:
  {
    modulesDirectories: ["node_modules", "bower_components"],
    extensions: ["", ".json", ".web.js", ".js", ".jsx"]
  },
  output:
  {
    path: "base/static/build/" + (!minimize ? "dev/" : ""),
    filename: "[name]" + (minimize ? "-[chunkhash].min." : ".") + "js",
    chunkFilename: "[id]" + (minimize ? "-[chunkhash].min." : ".") + "js",
    publicPath: minimize ? "/static/build/" : "http://localhost:8080/static/build/"
  }
};