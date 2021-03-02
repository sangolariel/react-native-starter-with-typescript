module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests'],
          '~': './src',
          '@components': './src/theme/components',
          '@interfaces': './src/interfaces',
          '@containers': './src/theme/containers',
          '@themeConfig': './src/theme/configs',
          '@svg': './src/theme/svg',
        },
      },
    ],
  ],
};
