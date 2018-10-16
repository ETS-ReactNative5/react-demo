import React, {Component} from 'react';
import LifeCycle2 from '../component/LifeCycle2'

class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            isRender: true,
            num: 0
        }
    }
  render() {
    return (
      <div className="App">
          <button onClick={()=>{this.setState({num:1})}}>父组件中setState更新 </button>
          <button onClick={()=> {this.setState({isRender: !this.state.isRender})}}>父组件中切换渲染</button>
          {this.state.isRender?<LifeCycle2></LifeCycle2>: '不渲染'}
      </div>
    );
  }
}

export default LifeCycle;
