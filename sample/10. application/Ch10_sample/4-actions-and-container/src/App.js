// src/App.js
import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// Container Componentに差し替える
// import Ranking from './components/Ranking';
import Ranking from './containers/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">すべてのカテゴリ</Link></li>
          <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
          <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
        </ul>

        <Switch>
          <Route path="/all" component={Ranking} />
          <Route
            path="/category/1"
            render={() => <Redirect to="/all" />}
          />
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

export default App;
