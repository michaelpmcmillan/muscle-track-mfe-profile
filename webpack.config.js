const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "michaelpmcmillan",
    projectName: "muscle-track-mfe-profile",
    env,
  });

  if (env === "dev") {
    return webpackMerge.smart(defaultConfig, {
      plugins: [new Dotenv()],
    });
  } else {
    return webpackMerge.smart(defaultConfig, {
      plugins: [
        new webpack.EnvironmentPlugin({
          PROFILE_GET:
            "https://muscle-track-ms-profile.netlify.app/.netlify/functions",
        }),
      ],
    });
  }
};
