module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            Screens: "./src/Screens",
            Components: "./src/Components",
            Redux: "./src/Redux",
            Routes: "./src/Routes.js",
            Images: "./src/Images",
            FireBase: "./src/FireBase",
          },
        },
      ],
    ],
  };
};
