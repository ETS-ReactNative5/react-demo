import React, {Component} from 'react';
import NoState from '../component/NoState';
import ClassComponent from '../component/ClassComponent';
import SetStateEg from '../component/SetStateEg';

class Home extends Component {

  render() {
    return (
      <div className="App">

        <h4>state</h4>
        <p>state 的主要作用是用于组件保存、控制、修改自己的可变状态。</p>
        <ol>
          <li>state 只能在construct中初始化</li>
          <li>state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改</li>
          <li>state 是一个局部的、只能被组件自身控制的数据源</li>
          <li>state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染</li>
        </ol>

        <SetStateEg parentNum={44}/>


        <h4>props</h4>
        <p>props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件</p>
        <ol>
          <li>组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果</li>
          <li>可以通过给组件添加类属性 defaultProps 来配置默认参数。</li>
          <li>props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。</li>
        </ol>
        <ClassComponent/>

        <b>state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。</b>
        <NoState title="无状态组件"/>


          <h4>  context </h4>
          <p>Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。</p>
          <p> Context 提供了一种在组件之间共享此类值的方式，而不必通过组件树的每个层级显式地传递 props 。</p>
      </div>
    );
  }
}

export default Home;
