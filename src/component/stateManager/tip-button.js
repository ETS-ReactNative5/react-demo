import React, {Component} from 'react';

class TipButton extends Component {
    componentDidMount() {
        // ThemeContext value is this.props.theme
        console.log('componentDidMount', this.props)
    }

    componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        console.log('componentDidUpdate', prevProps.theme, this.props.theme)

    }
    render () {
        return (
            <button {...this.props}></button>
        )
    }
}

export default TipButton;
