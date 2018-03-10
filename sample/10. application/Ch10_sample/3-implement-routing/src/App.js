// src/App.js
import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Ranking from './components/Ranking'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* カテゴリ名・IDはハードコート */}
        <ul>
          <li><Link to="/all">すべてのカテゴリ</Link></li>
          <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
          <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
        </ul>

        {/*
          <Switch>: どれか一つのRouteにマッチしたらそれ以上マッチしない
        */}
        <Switch>
          {/* 総合ランキングのルート */}
          <Route path="/all" component={Ranking} />
          {/* カテゴリID=1は総合なので /all にリダイレクト */}
          <Route
            path="/category/1"
            render={() => <Redirect to="/all" />}
          />
          {/* 各カテゴリのランキングのルート */}
          <Route
            path="/category/:id"
            render={
              ({ match }) => <Ranking categoryId={match.params.id} />
            }
          />
        </Switch>
      </div>
    );
  }
}
