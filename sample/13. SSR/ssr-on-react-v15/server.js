// server.js
import path from 'path';
// React関連のパッケージをimport
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// expressをimport
import express from 'express';
// Appコンポーネントをimport
import App from './App';

const app = express();

// GET /client.bundle.js
// client.bundle.jsの内容をそのまま返す
app.get('/client.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.bundle.js'));
});

// HTMLコンポーネント
// Appコンポーネントを包む大枠のHTML
// 内容はtest.htmlとほぼ同じ
function HTML({ contents }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>シンプルなサーバサイドレンダリング</title>
      </head>
      <body>
        {/* 描画先要素 */}
        <div id="root" dangerouslySetInnerHTML={{ __html: contents }}></div>
        {/* webpackが出力したファイル */}
        <script src="client.bundle.js"></script>
      </body>
    </html>
  );
}

// GET /
// サーバサイドレンダリングの結果のHTMLを返す
app.get('/', (req, res) => {
  // Dateインスタンスを生成
  const now = new Date();
  // AppコンポーネントをHTML文字列として出力
  const contentsHTML = ReactDOMServer.renderToString(
    <App renderedAt={now} />
  );

  // サーバーサイドレンダリングの結果を大枠のHTMLで囲う
  const fullHTML = ReactDOMServer.renderToStaticMarkup(
    <HTML contents={contentsHTML} />
  );

  // クライアントにレスポンスを返す
  res.send(fullHTML);
});

// ポート3000番でWebサーバーを起動
app.listen(3000, () => {
  console.log('ポート3000番で起動...');
});