cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "sentry-cordova.Sentry",
    "file": "plugins/sentry-cordova/dist/js/sentry-cordova.bundle.min.js",
    "pluginId": "sentry-cordova",
    "clobbers": [
      "Sentry"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "sentry-cordova": "0.9.1"
};
// BOTTOM OF METADATA
});