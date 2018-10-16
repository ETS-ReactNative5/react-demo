import React, {Component} from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './theme-button';

// 一个使用到ThemedButton组件的中间组件
function Toolbar(props) {
    return (
        <ThemedButton {... props}>
            Change Theme
        </ThemedButton>
    );
}

class ThemeApp extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () =>
            // console.log('999999999999')
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));

        // State 包含了 updater 函数 所以它可以传递给底层的 context Provide
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        // ThemedButton 位于 ThemeProvider 内
        // 在外部使用时使用来自 state 里面的 theme
        // 默认 dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar {... this.props}/>
                </ThemeContext.Provider>
                <section>
                    <ThemedButton/>
                </section>
            </div>
        );
    }
}

export default ThemeApp;