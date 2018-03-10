# redux

# reduxの3原則

**１．Single source of truth**

・アプリケーション内の全ての状態を一枚岩の大きなオブジェクトとして管理

**２．State in read-only**

・アプリケーションの状態を直接的に変更することはできない

・Action(＝どんな動作を行ったかを示す単なるオブジェクト)をdispatch（＝発行）することが、唯一の状態変更の方法

・こうすることでデータの流れが完全に一方向になって、余計な副作用の発生を防ぐ

**３. Changes are made with pure functions**

・状態変更は副作用がない、純粋関数によって行われる

・同じ入力値を渡すたびに、決まって同じ出力値が得られる関数＝純粋関数

・Actionを入力として受け取り、Reducerで状態変化させ、それを出力する
