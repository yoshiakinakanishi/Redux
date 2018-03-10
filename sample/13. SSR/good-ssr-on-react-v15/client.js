// client.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// サーバーからのデータ
const serverNowString = 
  document.getElementById('server-now').getAttribute('data-server-now');
// サーバーのDateインスタンスを復元する
const now = new Date(
  // 文字列から数値に変換する
  parseInt(serverNowString, 10)
);

ReactDOM.render(
  <App renderedAt={now} />,
  document.getElementById('root')
);