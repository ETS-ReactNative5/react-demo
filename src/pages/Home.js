import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  componentWillMount () {
    this.props.onChangeHeaderArrow(false)
  }

  componentWillUnmount () {
    this.props.onChangeHeaderArrow(true)
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li><Link to="/intro">React.js简介</Link></li>
          <li><Link to="/eg">demo</Link></li>
          <li><Link to="/jsxIntro">JSX</Link></li>
          <li><Link to="/stateProps">state && props</Link></li>
          <li><Link to="/lifeCycle">生命周期</Link></li>
          <li><Link to="/dom">DOM操作</Link></li>
          <li><Link to="/stateManager">React应用状态管理</Link></li>
        </ol>
      </div>
    );
  }
}

export default Home;



// React-router
// React-router提供了一些router的核心api，包括Router, Route, Switch等，但是它没有提供dom操作进行跳转的api。
//
// React-router-dom
// React-router-dom提供了BrowserRouter, Route, Link等api,我们可以通过dom的事件控制路由。