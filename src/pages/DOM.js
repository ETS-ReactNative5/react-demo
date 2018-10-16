import React, {Component} from 'react';
import RefDom1 from '../component/refs/RefDom1'
import RefDom2 from '../component/refs/RefDom2'
import RefClass1 from '../component/refs/RefClass1'
import RefClass2 from '../component/refs/RefClass2'

class DOM extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    console.log('event', event.target, event.target.value)
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <h4>受控组件</h4>
        <p>
          类似于 input 、select、textarea 这些元素的 value 值被 React.js 所控制、渲染的组件，用户无法修改，在 React.js 当中被称为受控组件（被控制的属性包括 value checked select）
        </p>
          <p>受控组件
              <input type="text" value={this.state.name} onChange={this.handleChange} />
          </p>
          <p>非受控组件 <input type="text" /></p>



        <h4>非受控组件</h4>
        <p>在受控组件中，表单数据由 React 组件处理。如果让表单数据由 DOM 处理时，替代方案为使用非受控组件。</p>
          <p>设置默认value : defaultValue='默认值' </p>
        <input type="text" defaultValue='默认值'/>


        <h4>获取DOM元素</h4>
          <p>不限于获取非受控组件,处理焦点、文本选择或媒体控制</p>
        <p>
          React.js 当中提供了 ref 属性来帮助我们获取已经挂载的元素的 DOM 节点
        </p>
        <h5>refs 使用方式一 ：使用 React.createRef() 创建 refs，通常被赋值给实例的一个属性，通过 ref 属性来获得 React 元素。 </h5>
        <p>访问refs： 使用 ref 中的 current 属性, React 会在组件加载时将 DOM 元素传入 current 属性，在卸载时则会改回 null。</p>
        <p>ref的值取决于节点的类型</p>
        <ul>
          <li>当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。</li>
          <li>当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。</li>
          <li>你不能在函数式组件上使用 ref 属性，因为它们没有实例。</li>
        </ul>
        {/*为dom元素加ref*/}
        <RefDom1/>
        {/*为类组件加ref*/}
        {/*<RefClass1/>*/}
        <h5>refs 使用方式二 ： ref回调</h5>
        <p>React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用，当卸载时传入 null 并调用它。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 this.input 获取到这个 DOM 元素。</p>
        <RefDom2/>
        {/*<RefClass2/>*/}
      </div>
    );
  }
}

export default DOM;
