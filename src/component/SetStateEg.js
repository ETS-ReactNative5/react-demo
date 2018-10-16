import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ClassComponent extends Component {
  constructor () {
    super()
    this.state = {
      num: 0
    }
    this.addNum = this.addNum.bind(this)
  }

  addNum () {
    this.setState({num: this.state.num + 1})
  }

  render() {
    return (
      <div>
        <span className="eg">
          {this.props.title}
        </span>
        <div className="">
          num: { this.state.num }
          <button style={{marginLeft: '20px'}} onClick={this.addNum}> +1 </button>
        </div>
      </div>
    )
  };
}
// 类属性
ClassComponent.defaultProps = { // 属性的默认值 defaultProps 用来确保 this.props.name 在父组件没有特别指定的情况下，有一个初始值。类型检查发生在 defaultProps 赋值之后，所以类型检查也会应用在 defaultProps 上面。
    title: 'setSate使用'
}
ClassComponent.propTypes = { // 组件的参数验证
  title: PropTypes.string.isRequired
};

export default ClassComponent;
