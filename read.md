# Reactコンポーネント
- Functional ComponentとClass componentが2つがある
- Class componentの場合、propsの受け取りがthis.propsとなる
- 

```
Functional Component

  const Hello = (props) => {
   return <div>こんにちは、{props.name}さん</div>;
  };

Class Component

  class Hello extends React.Component {
   render() {
    return <div>こんにちは、{this.props.name}</div>;
   }
  };

```

