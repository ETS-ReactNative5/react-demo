import React, {Component} from 'react';
import PropTypes from 'prop-types'
class ClassComponent extends Component {
  static defaultProps = { // 属性的默认值
    title: 'props示例'
  }

  render() {
    const say = (event) => alert('我是' + this.props.title)
    return (
      <div>
        <span className="eg" onClick={say}>
          点我（{this.props.title}）
        </span>
      </div>
    )
  };
}

ClassComponent.propTypes = { // 组件的参数验证
  title: PropTypes.string.isRequired
};

export default ClassComponent;
