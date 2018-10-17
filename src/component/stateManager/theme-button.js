import React, {Component} from 'react';
import {ThemeContext} from './theme-context';

import Button from './tip-button'

class ThemedButton extends Component {
  shouldComponentUpdate() { // 不受shouldComponentUpdate影响
    return false
  }

  render() {
    // 含有consumer的父组件传prods
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <div>
            <Button
              {...this.props}
              theme={theme}
              onClick={toggleTheme}
            > {this.props.children || 'button 子组件'} </Button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemedButton;
