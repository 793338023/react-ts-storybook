module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });

  config.resolve.extensions.push(".tsx", ".ts", ".js", ".json");
  return config;
};
