import React, { Component } from 'react';
import img03 from '../image/03.png'
import img02 from '../image/02.png'

class Intro extends Component {
  render() {
    return (
      <div className="App">
          <h4>react 是什么？</h4>
          <p>React 是一个基于组件的前端界面开发框架。主要用于构建UI。它不是一个Model-View-Controller框架。</p>
          <p>React不处理Ajax、路由和数据存储，也不规定数据组织的方式。React的精简允许你将它集成到各种各样的系统中 。</p>
          <h4>react 优势？</h4>
          <h5>
              React运用一个虚拟的DOM实现了一个非常强大的渲染系统。
          </h5>
          <img src={img03} alt=""/>
          <p>当用户操作页面时，触发 Virtual DOM ，Virtual DOM触发应用程序，程序做出相应操作改变Virtual DOM，这会就会用diff算法比较前后DOM的改变，最少的改动完成这次DOM修改。</p>

          <p>React diff算法（比较虚拟DOM的机制）</p>
          <p>将下图左侧dom结构转为右边的结构，如果直接操作dom的话，进行四次删除，五次插入，这种消耗是非常大的。使用Virtual DOM 就会比较两个结构的差异，改变四次内容，一次插入就可以实现。</p>
          <img src={img02} alt=""/>
          <p>Virtual DOM 的核心是计算比较改变前后的DOM区别，然后用最少的DOM操作语句对DOM进行操作</p>

          <h5>使用JSX语法糖，在js文件中写HTML模板。</h5>
          <h5>组件化开发</h5>
          <h5>数据单向流动</h5>
      </div>
    );
  }
}

export default Intro;
