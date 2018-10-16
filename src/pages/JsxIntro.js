import React, { Component } from 'react';
import JSX from '../component/JSX';
import img01 from '../image/01.png'

class JsxIntro extends Component {
  render() {
    return (
      <div className="App">
          <h4>JSX 是什么？</h4>
          <p> JSX， 一种 JavaScript 的语法扩展。可以在js文件中写HTML模板。本质上来讲，JSX 只是为 React.createElement(component, props, ...children) 方法提供的语法糖。</p>
          <p>这种语法并不能直接运行，需要babel 编译后才能执行。</p>
          <p>不使用JSX时,也可以使用 React.createElement('h1', {}, 'hello react')手动创建HTML元素。这种结够不清晰，推荐使用JSX。</p>
          <a target="_blank" rel="noopener noreferrer"
             href="https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&code=function%20hello()%20%7B%0A%20%20return%20%3Cdiv%3EHello%20world!%3C%2Fdiv%3E%3B%0A%7D"> 在线 Babel 编译器.</a>
          <h4>JSX如何渲染到页面上的？  </h4>
          <h5>
              jsx通过babel编译和react.js构造转成react 虚拟dom元素，在用ReactDom.render() 方法渲染成真正DOM的
          </h5>
          <img src={img01} alt=""/>
          <h4>JSX 语法 </h4>
          <JSX type='Child2'></JSX>
      </div>
    );
  }
}

export default JsxIntro;
