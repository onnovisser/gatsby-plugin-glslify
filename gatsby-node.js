exports.onCreateWebpackConfig = ({
  loaders,
  actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glsl|frag|vert|comp)$/,
          use: [loaders.raw(), "glslify-loader"]
        }
      ]
    }
  });
};
