// renderToString.js
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// React ElementをHTMLの文字列に変換
const html = ReactDOMServer.renderToString(
  <h1>Hello, SSR!</h1>
);

console.log(html);
