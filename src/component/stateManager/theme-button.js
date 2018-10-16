import React, {Component} from 'react';
import {ThemeContext} from './theme-context';

// import Button from './tip-button'

class ThemedButton extends Component {
  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    // ThemeContext value is this.props.theme
    console.log('componentDidMount', this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    // Previous ThemeContext value is prevProps.theme
    // New ThemeContext value is this.props.theme
    console.log('componentDidUpdate', prevProps.theme, this.props.theme)

  }

  render() {
    console.log('theme-button render')
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <div>
            <button
              {...this.props}
              style={{backgroundColor: theme.background}}
              onClick={toggleTheme}
            > {this.props.children || 'button 子组件'} </button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemedButton;
