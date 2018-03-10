// webpack.config.js
// webpackの設定ファイル
module.exports = {
  // client.jsを起点にする
  entry: './client.js',

  // 出力に関する設定
  output: {
    // 出力ファイル名
    filename: 'client.bundle.js'
  },

  module: {
    rules: [
      // babel-loaderの設定
      //
      // - 拡張子が.jsのファイルにBabelのトランスパイルを実行
      // - 下記のプリセットを指定
      //   - babel-preset-env
      //   - babel-preset-react
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};
