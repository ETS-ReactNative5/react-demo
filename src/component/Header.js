import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Header extends Component {
  static defaultProps = {
    headerBackArrow: true
  }

  constructor() {
    super()
    this.state = {
      title: 'React'
    }
    this.goBack = this.goBack.bind(this)
  }

  goBack () {
    window.history.go(-1)
  }
  render() {
    return (
      <header className="App-header">
        {this.props.headerBackArrow ? <div className="arrow" onClick={this.goBack}></div> : '' }
        <h1 className="App-title">React</h1>
      </header>
    )
  };
}

Header.propTypes = {
  headerBackArrow: PropTypes.bool.isRequired
};

export default Header;
