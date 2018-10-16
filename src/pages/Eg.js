import React, {Component} from 'react'; // 由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先声明 React 变量。

class Eg extends Component {
    constructor() { // 一般在构造器中初始化数据
        super() // ES6的继承都需要super()
        this.state = { // 内部状态
            name: 'react'
        }
        this.handleClick = this.handleClick.bind(this) // 将函数绑定到组件实例 (手动修改函数中的this指向)
    }

    handleClick() {
        console.log('this.state.name', this.state.name)
    }

    render() {
        return ( // JSX
            <div className="App"
                 style={{fontSize: '20px'}}
                 onClick={this.handleClick}>
                {/* jsx 中表达式都是用 {} ， style 接受一个的样式对象  */}
                {/* jsx中div会被编译为React.createElement，会丢失this作用域*/}
                {/* 解决方法1 construct中bind绑定组件的this this.handleClick = this.handleClick.bind(this) */}
                {/* 解决方法2 使用箭头函数保留组建this作用域  onClick={() => this.handleClick()}*/}
                hello {this.state.name}
            </div>
        );
    }
}

export default Eg;
