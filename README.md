# reduxの3原則

**１．Single source of truth**

- アプリケーション内の全ての状態を一枚岩の大きなオブジェクトとして管理

**２．State in read-only**

- アプリケーションの状態を直接的に変更することはできない
- Action(＝どんな動作を行ったかを示す単なるオブジェクト)をdispatch（＝発行）することが、唯一の状態変更の方法
- こうすることでデータの流れが完全に一方向になって、余計な副作用の発生を防ぐ

**３. Changes are made with pure functions**

- 状態変更は副作用がない、純粋関数によって行われる
- 同じ入力値を渡すたびに、決まって同じ出力値が得られる関数＝純粋関数
- Actionを入力として受け取り、Reducerで状態変化させ、それを出力する

# Reducer

- Reducerは状態を変化させるための関数
- Reducerの具体例 ― スプレッド演算子
```
function books(state = null, action) { // 第1引数は状態を示すオブジェクト(state)、第2引数は動作を示すオブジェクト(action)
    switch (action.type) { // actionには必ずtypeというプロパティが生える、行った動作を示す文字列などが渡ってくる
        case 'START_READING': // 本を読み始めたことを示すSTART_READINGというactionタイプ
            return {
                ...state, // スプレッド演算子は元の値に影響を与えない！
                status: 1,
            };

        case 'FINISH READING': // 本を読み終えたことを示すFINISH_READINGというactionタイプ
            return {
                ...state,
                status: 2,
            };
        
        default:
            return; state;
    }
}
```

- Reducerの具体例 ― Object.assignメソッド（元の値に影響を与えない方法としてGOOD！）

```
function books(state = null, action) { 
    switch (action.type) { 
        case 'START_READING': 
            return Object.assign({}, state, {
                status: 1,
            });

        case 'FINISH READING': 
            return Object.assign({}, state, {
                status: 2,
            });
        
        default:
            return; state;
    }
}
```
