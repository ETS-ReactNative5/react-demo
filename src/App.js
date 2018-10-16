import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Header from './component/Header';
import RouteWrapper from './component/RouteWrapper';
import Intro from './pages/Intro';
import Eg from './pages/Eg';
import JsxIntro from './pages/JsxIntro';
// import JSX from './component/JSX';
import LifeCycle from './pages/LifeCycle';
import DOM from './pages/DOM';
import StateProps from './pages/StateProps';
import StateManager from './pages/StateManager';
class App extends Component {
  constructor () {
    super();
    this.state = {
      headerBackArrow: true
    }
    this.handleHeaderArrow = this.handleHeaderArrow.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    console.log('this.props', this.props)
  }

  handleHeaderArrow (flag) {
    this.setState({headerBackArrow: flag})
  }

  render() {
    return (
      <div className="App">
        <Header headerBackArrow={this.state.headerBackArrow}/>
        <div className="Content">
          <BrowserRouter>
            <Switch>
              <RouteWrapper exact path="/"  component={Home} onChangeHeaderArrow={this.handleHeaderArrow}/>
              {/*<Route exact path="/" component={Home} onChangeHeaderArrow={this.handleHeaderArrow}></Route>*/}
              <Route path="/intro" component={Intro} ></Route>
              <Route path="/eg" component={Eg} ></Route>
              <Route path="/jsxIntro" component={JsxIntro} ></Route>
              <Route path="/stateProps" component={StateProps} ></Route>
              <Route path="/lifeCycle" component={LifeCycle} ></Route>
              <Route path="/dom" component={DOM} ></Route>
              <Route path="/stateManager" component={StateManager} ></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
