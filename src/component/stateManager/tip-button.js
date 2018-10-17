import React, {Component} from 'react';

class TipButton extends Component {
    componentDidMount() { // 生命周期中访问ThemeContext
        // ThemeContext value is this.props.theme
        console.log('componentDidMount', this.props, this.props.theme)
    }

    componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        console.log('componentDidUpdate', prevProps, this.props)

    }
    render () {
        return (
            <button {...this.props} style={{backgroundColor: this.props.theme.background}}
                    onClick={this.props.onClick}></button>
        )
    }
}

export default TipButton;
