import React, {Component} from 'react';
class JSXChild extends Component {
  render() {
    const Parent = {
      Child1: function () {
        return <h5>JSX 中的点表示法来引用 React 组件 </h5>
      },
      Child2: function () {
        return <h5>{'JSX 标签名不能为一个表达式。'} </h5>
      },
      Child3: function (props) {
        return (
          <div>
            <h5>JSX 表达式中，标记之间的内容作为特殊的参数传递：props.children </h5>

            <p>有几种不同的方法来传递子代</p>
            <ol>
              <li>字符串常量</li>
              <li>嵌入更多的 JSX 元素</li>
              <li>JavaScript 表达式</li>
              <li>函数</li>
            </ol>

            <div className="eg">{props.children}</div>
          </div>
        )
      }
    }
    let Type= 'Child2'
    Type = Parent[Type]

    return (
      <div>
        <Parent.Child1 />
        <Type />
        <Parent.Child3 >
          我是子代元素(字符串常量)
          <div>我是子代元素 JSX 元素</div>
          {'我是子代元素 JavaScript 表达式'}
        </Parent.Child3>
      </div>
    );
  }
}

export default JSXChild;
