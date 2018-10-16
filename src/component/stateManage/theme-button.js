import React, {Component} from 'react';
import {ThemeContext} from './theme-context';

// import Button from './tip-button'

class ThemedButton extends Component {
    shouldComponentUpdate() {
        return false
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
