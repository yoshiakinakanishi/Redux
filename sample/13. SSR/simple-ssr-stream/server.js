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

// GET /
// サーバサイドレンダリングの結果のHTMLを返す
app.get('/', (req, res) => {
  const now = new Date();
  const state = JSON.stringify({ now });
  const stream = ReactDOMServer.renderToNodeStream(
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>シンプルなサーバサイドレンダリング</title>
      </head>
      <body>
        {/* 描画先要素 */}
        <div id="root">
          <App renderedAt={now} />
        </div>

        {/* データの引き継ぎ */}
        <script id="initial-state" data-json={state}></script>

        {/* webpackが出力したファイル */}
        <script src="client.bundle.js"></script>
      </body>
    </html>
  );

  stream.pipe(res);
});

// ポート3000番でWebサーバーを起動
app.listen(3000, () => {
  console.log('ポート3000番で起動...');
});