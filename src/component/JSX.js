import React, {Component} from 'react';
import img04 from '../image/04.jpg'
class Home extends Component {
    // 语法：{变量} 直接输入变量值
    //      {运算符/表达式 && ? : } 可以直接运算
    //      {... 属性展开运算符} 可以将对象的一个一个展开作为JSX的属性
    //      {{对象形式的样式}}

    render() {
        const user = [
            {name: '张三', age: 22, id: 1},
            {name: '李四', age: 22, id: 2},
            {name: '王五', age: 22, id: 3}
        ]
        const Parent = {
            Child1: function () {
                return <h5 {...user[0]}>JSX 中的点表示法来引用 React 组件 </h5>
            },
            Child2: function () {
                return <h5 mes = '123'>{'JSX 标签名不能为一个表达式。'} </h5>
            },
            Child3: function (props) {
                return (
                    <div>
                        <h5>JSX 表达式中，标记之间的内容作为特殊的参数传递：props.children </h5>
                        <ol>
                            <p>有几种不同的方法来传递子代</p>
                            <li>字符串常量</li>
                            <li>嵌入更多的 JSX 元素</li>
                            <li>JavaScript 表达式</li>
                            <li>函数</li>
                        </ol>

                        <div>{props.children}</div>
                    </div>
                )
            }
        }
        let {type} =  this.props
        let Type = Parent[type]
        console.log(type)
        return (
            <div>
                <img src={img04} alt=""/>
                <h5 className="ed">列表渲染</h5>
                <div>
                    {['jsx ', ' 渲染 ', ' 数组']}
                </div>
                <div>
                    <ol>
                        {user.map((item) => {
                            return (
                                <li key={item.id}>name: {item.name} age: {item.age}</li>
                            )
                        })
                        }
                    </ol>
                </div>

                <Parent.Child1 />
                <Type />
                <Parent.Child3 >
                    我是子代元素(字符串常量)
                    <div>我是子代元素 JSX 元素</div>
                    {'我是子代元素 JavaScript 表达式'}
                </Parent.Child3>
                <h5>JSX 注意点</h5>
                <ol>
                    <li>JSX中写HTML标签首字母小写；组件首字母大写</li>
                    <li>如果有多个标签，必须使用一个顶级标签包起来</li>
                    <li>JSX生成的HTML元素是虚拟一个DOM,实际上是一个React对象</li>
                    <li>布尔值、Null 和 Undefined 被忽略,想让类似 false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串 : String(myVariable)</li>
                    <li>JavaScript 中的数字0，它们依然会被渲染。</li>
                </ol>

                {/*<div>false: {false}</div>*/}
                {/*<div>null: {null}</div>*/}
                {/*<div>undefined: {undefined}</div>*/}
                {/*<div>true: {true}</div>*/}
                {/*<div>{[].length && <h1>前面改为布尔值才能控制元素的是否渲染</h1>}</div>*/}

                {/*<div>false: {false  || <h6>ddddd</h6>}</div>*/}
                {/*<div>null: {null  || <h6>ddddd</h6>}</div>*/}
                {/*<div>undefined: {undefined || <h6>ddddd</h6>}</div>*/}
                {/*<div>true: {true && <h6>ddddd</h6>}</div>*/}
            </div>
        );
    }
}

export default Home;
