// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'; // 追加
import logger from 'redux-logger'; // 追加
import { Provider } from 'react-redux'; // 追加
import App from './App';
import * as reducers from './reducers'; // 追加

// Storeの生成
const store = createStore(
  // 一つのReducerで完結することはほぼ無いので、
  // 最初からcombineReducersを使う実装にしておく
  combineReducers(reducers),
  // Redux Middlewareにredux-loggerを設定
  applyMiddleware(logger)
);

ReactDOM.render(
  // StoreをAppコンポーネントに紐付け
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
