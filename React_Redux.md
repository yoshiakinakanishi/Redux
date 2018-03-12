# React-Redux
- Storeの状態変化に応じてViewを描画させるが、View構造が多段構造になるほど、該当部分のViewのみを再描画するのはとても骨が折れる、、、
- そこで、reactとreduxを組み合わせるのを手助けしてくれるライブラリを使う
- reduxが公式として打ち出しているReactとの連携ツール、それがreact-redux

# Reducer
```
const initialState = {
  task: '',
  tasks: []
};

eport default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}
```

# Action
```
export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
```

# Containers
- Reactのコンポーネントをラップしたコンポーネント
- ReduxのStoreやActionを受け取って、ReactコンポーネントのPropsとして渡す役割を担う
- ReactとReduxの橋渡しが責務、ここでJSXを記述するのは誤り
- mapStateToPropsでStoreにあるtask,tasksというStateをコンポーネントのPropsに渡す
- mapDispatchToPropsで該当のActionをDispatch(発行)させる関数をコンポーネントのProps
- このmapStateToPropsとmapDispatchToPropsによって、TodoAppコンポーネントには次の４つのPropsが渡される
- task ＝ Inputフォームに入力されたタスク
- tasks ＝ タスクの配列
- addTask ＝ タスクを追加する関数
- InputTask ＝ タスクを入力する関数
- mapStateToPropsでreturnしたオブジェクトは、connect先のコンポーネントのPropsとして受け取ることができる
- 複数のReducerを組み合わせて使っている場合、必要な部分のStoreのみ取り出してreturnしてあげれば、不要なStateをコンポーネントに渡さずに済む

```
import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

function mapStateToProps({ task, tasks }) {
  return {
    task,
    tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
```

# Components
- Action CreatorやActionのDispacthもContainers側でおこなっているので、コンポーネント側はPropsで渡ってきたinputTaskとaddTaskを呼び出すだけ
- コンポーネントのRedux依存が消えて、再利用性も高まる純粋なReactコンポーネント
```
import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}
```

# Index
- 最上位のコンポーネントをProviderでラップし、propsにStoreを与えてStoreを保持する仕組み
- Providerを用いて、そのPropsにStoreを渡す
- コンポーネントのimport元をcomponentsからcontainersに変更
- storeの生成も別ファイルに切り出しておくとなお良し
```
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
```
