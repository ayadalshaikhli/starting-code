const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: "url-loader?limit=100000",
    });
    return config;
  },
});

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
