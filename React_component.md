# Reactコンポーネント
- Functional ComponentとClass componentが2つがある
- Functional Componentは関数定義で、propsを引数を受け取り、JSXをreturnする

```
--- Functional Component ---

  const Hello = (props) => {
   return <div>こんにちは、{props.name}さん</div>;
  };
```

- Class Componentはクラスによって定義される
- Class Componentは、React.componentを明示的に継承し、propsの受け取り方がthis.propsとなる
- Class Componentにはstateがあり、コンポーネントの状態を記録する仕組み
- Class Componentにはライフサイクルメソッドという特殊なメソッドを定義できる

```
▼Functional Component

  const Hello = (props) => {
   return <div>こんにちは、{props.name}さん</div>;
  };
```

